import { Students } from 'types/students.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string) =>
  // axios return về 1 data có kiểu là Students
  http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
