import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 10,
  },
  calcContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  result: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
    marginBottom: 5,
  },
  liteResult: {
    fontSize: 30,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'right',
  },
  blankView: {
    flex: 1,
  },
  funcButton: {
    height: 75,
    width: 75,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  funcButtonText: {
    fontSize: 32,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
});