import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  searchIcon: {
    paddingLeft: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
    paddingLeft: 20,
  },
  filterIcon: {
    flex: 0,
    width: 60,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#ffc702',
  },
});
