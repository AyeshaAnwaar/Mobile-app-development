import { View, StyleSheet,} from 'react-native';

const Chessboard = () => {
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      const row = (
        <View key={i} style={styles.row}>
          {renderSquares(i)}
        </View>
      );
      rows.push(row);
    }
    return rows;
  };

  const renderSquares = (rowIdx) => {
    const squares = [];
    const colors = ['#E8E8E8', '#BDBDBD'];
    for (let i = 0; i < 8; i++) {
      const color = colors[(rowIdx + i) % 2];
      const square = (
        <View key={i} style={[styles.square, { backgroundColor: color }]} />
      );
      squares.push(square);
    }
    return squares;
  };

  return <View style={styles.container}>{renderRows()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    flex: 1,
    aspectRatio: 1,
  },
});

export default Chessboard;
