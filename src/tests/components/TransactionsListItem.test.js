import React from 'react'
import { shallow } from 'enzyme'
import { TransactionListItem } from '../../components/TransactionsListItem'

test('should render TransactionListItem correctly with provided title', () => {
   const props = {
      name: 'AAA',
      euro: 100,
      id: '123',
      euroToPLN: 4.29,
      removeTransaction: jest.fn()
   }
   const wrapper = shallow(<TransactionListItem props={props} />)
   expect(wrapper).toMatchSnapshot()
})

test('should render TransactionListItem correctly without provided title', () => {
   const props = {
      name: '',
      euro: 2000,
      id: '123456',
      euroToPLN: 4.29,
      removeTransaction: jest.fn()
   }
   const wrapper = shallow(<TransactionListItem props={props} />)
   expect(wrapper).toMatchSnapshot()
})