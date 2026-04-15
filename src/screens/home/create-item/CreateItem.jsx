import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import styles from '../../../../styles/App.styles';
import { useState } from 'react';

const CreateItem = ({ data, setData }) => {
  const [itemName, setItem] = useState('');
  const [stockAmount, setStockAmount] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemID] = useState(null);
  const handlerAddItem = () => {
    const newData = {
      id: data.length + 1,
      name: itemName,
      stock: stockAmount,
      unit: 'kg',
    };
    setData([...data, newData]);
    setItem('');
    setStockAmount('');
    setIsEdit(false);
  };
  const handleDelete = id => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
    return newData;
  };
  const handlerEditItem = item => {
    setItem(item.name);
    setItemID(item.id);
    setStockAmount(item.stock);
    setIsEdit(true);
  };
  const handlerUpdateItem = () => {
    setData(
      data.map(item =>
        item.id === itemId
          ? { ...item, name: itemName, stock: stockAmount }
          : item,
      ),
    );
  };
  return (
    <View>
      <TextInput
        placeholder="Enter a item name"
        style={styles.input}
        value={itemName}
        onChangeText={item => setItem(item)}
      />

      <TextInput
        placeholder="Enter stock"
        style={styles.input}
        value={stockAmount}
        onChangeText={item => setStockAmount(item)}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          isEdit ? handlerUpdateItem() : handlerAddItem();
        }}
      >
        <Text style={styles.buttonText}>
          {isEdit ? 'Update' : '  Add Item'}
        </Text>
      </Pressable>

      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              { backgroundColor: item.stock < 20 ? '#fcb9b9' : '#defde2' },
            ]}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10,
              }}
            >
              <Pressable
                onPress={() => {
                  handlerEditItem(item);
                }}
              >
                <Text style={styles.itemText}>Edit</Text>
              </Pressable>
              <Pressable onPress={() => handleDelete(item.id)}>
                <Text style={styles.itemText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CreateItem;
