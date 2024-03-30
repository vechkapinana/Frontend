import { Form, Button, Input, Table, Modal } from 'antd'
import { ApiService } from '../../services/api.service'
import { useEffect, useState } from 'react'

const apiService = new ApiService()

const columns = [
	{
		title: 'Id',
		dataIndex: 'id',
		key: 'id'
	},
	{
		title: 'Название',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: 'Описание',
		dataIndex: 'description',
		key: 'description'
	}
]

function CrudExample() {
	const [items, setItems] = useState([]) //массив айтем который мы вводим - items
	const [modalVisible, setModalVisible] = useState(false)
	const [itemRecord, setItemRecord] = useState({})//то что выводится (запись)

	function showItem(recId) {//когда нажимаем добавить
		recId
			? apiService.get('/item/' + recId).then(res => {
					setItemRecord(res)
					setModalVisible(true)
			  })
			: setModalVisible(true)
	}

	function saveItem() {
		apiService.post('/item', itemRecord).then(() => {
			close()
			fetchData()
		})
	}

	function removeItem(recId) {
		apiService.delete('/item/' + recId).then(() => {
			close()
			fetchData()
		})
	}

	function close() {
		setItemRecord({})
		setModalVisible(false)
	}

	function fetchData() {
		apiService.get('/items').then(res => {
			setItems(res)
		})
	}

	useEffect(() => {
		fetchData()
	}, [])
	return (
		<>
			<Button type='primary' onClick={() => showItem()}>
				Добавить
			</Button>
			<Table
				pagination={{ position: ['topRight'] }}
				dataSource={items}
				columns={columns}
				onRow={rec => {
					return {
						onClick: () => showItem(rec.id) //при нажатиии
					}
				}}
			></Table>
			<Modal
				title={itemRecord.id ? 'Изменение сущности с id=' + itemRecord.id : 'Добавление новой сущности'}
				open={modalVisible}
				okText='Сохранить'
				cancelText='Отмена'
				onCancel={() => close()}
				centered
				footer={[
					<Button type='primary' onClick={() => saveItem()} disabled={!itemRecord.name || !itemRecord.description}>
						Сохранить
					</Button>,
					itemRecord.id ? (
						<Button danger onClick={() => removeItem(itemRecord.id)}>
							Удалить
						</Button>
					) : null,
					<Button onClick={() => close()}>Отмена</Button>
				]}
			>
				<Form labelAlign='left' labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}>
					<Form.Item label='Название'>
						<Input
							onChange={v =>
								setItemRecord(prevState => {
									return { ...prevState, name: v.target.value }//что бы можно было поменять только поле нейм
								})
							}
							value={itemRecord.name}
						/>
					</Form.Item>
					<Form.Item label='Описание'>
						<Input
							onChange={v =>
								setItemRecord(prevState => {//сохраняется реактивность
									return { ...prevState, description: v.target.value }
								})
							}
							value={itemRecord.description}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
}

export default CrudExample