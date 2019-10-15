import React from 'react'
import { shallow } from 'enzyme'
import { AddTransactionEuroForm } from '../../components/AddTransactionEuroForm'

test('should render AddTransactionEuroForm correctly with provided values', () => {
   const wrapper = shallow(<AddTransactionEuroForm addTransaction={jest.fn()} summaryObject={{ inEURO: 1, inPLN: 4.22 }} />)
   expect(wrapper).toMatchSnapshot()
})