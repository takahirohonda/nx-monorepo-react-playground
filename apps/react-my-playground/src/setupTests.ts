// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
// We need to add this for useNavigate to work within tests....
// Otherwise, we get `reference error: Request is not defined`
// https://stackoverflow.com/questions/74497916/referenceerror-request-is-not-defined-when-testing-with-react-router-v6-4
import { enableFetchMocks } from 'jest-fetch-mock'
import React from 'react'
enableFetchMocks()
