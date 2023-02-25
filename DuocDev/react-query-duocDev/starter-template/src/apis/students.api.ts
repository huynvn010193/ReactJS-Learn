import { GenericAbortSignal } from 'axios'
import { Student, Students } from 'types/students.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string, signal?: AbortSignal) =>
  // axios return về 1 data có kiểu là Students
  http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    },
    signal
  })

export const addStudent = (student: Omit<Student, 'id'>) => http.post<Student>('/students', student)

export const getStudent = (id: number | string) => http.get<Student>(`students/${id}`)

export const updateStudent = (id: number | string, student: Student) => http.put<Student>(`students/${id}`, student)

export const deleteStudent = (id: number | string) => http.delete<{}>(`students/${id}`)
