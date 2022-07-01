import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  moviePoster: {
    width: 143,
    height: 212,
    borderRadius: 5,
  },
  movieContainer: {
    width: 170,
    padding: 20,
  },
  sliderHeader: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeMore: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13,
  },
  seeMoreWrapper: {
    borderWidth: 1,
    borderColor: '#E5E4EA',
    padding: 5,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderRadius: 100,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieName: {
    fontFamily: 'Mulish-Bold',
    fontWeight: '700',
    color: '#000000',
    width: 150,
    lineHeight: 18,
    fontSize: 14,
    paddingVertical: 6,
  },
  ratingText: {
    color: '#9C9C9C',
    fontFamily: 'Mulish-Bold',
    fontWeight: '400',
  },
  sliderHeaderText: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.02,
    color: '#000000',
  },
});
