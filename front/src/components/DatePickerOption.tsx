import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {colors} from '@/constants';

interface DatePickerOptionProps {
  isVisible: boolean;
  date: any;
  onChangeDate: (date: any) => void;
  onConfirmDate: () => void;
}

const DatePickerOption = ({
  isVisible,
  date,
  onChangeDate,
  onConfirmDate,
}: DatePickerOptionProps) => {
  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <SafeAreaView style={styles.optionBackground}>
        <View style={styles.optionBackground}>
          <DatePicker
            mode="date"
            theme="light"
            date={date}
            onDateChange={onChangeDate}
            locale="ko"
          />
        </View>
        <View style={styles.optionContainer}></View>
      </SafeAreaView>
    </Modal>
  );
};

export default DatePickerOption;

const styles = StyleSheet.create({
  pickerContainer: {
    alignItems: 'center',
  },
  optionBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dimmed: {
    backgroundColor: 'rgba(0 0 0 / 0.5)',
  },
  optionContainer: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: colors.GRAY_100,
    overflow: 'hidden',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    gap: 5,
  },
  optionText: {
    fontSize: 17,
    color: colors.BLUE_500,
    fontWeight: '500',
  },
});
