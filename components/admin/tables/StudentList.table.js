const people = [
  {
    name: 'Lindsay Walton',
    title: 'Year 4',
    email: 'RRFSDE288990',
    role: 'Mr. Kay',
  },
  {
    name: 'Lindsay Walton',
    title: 'Year 2',
    email: 'RRFSDE288990',
    role: 'Mr. Kay',
  },
  {
    name: 'Lindsay Walton',
    title: 'Year 6',
    email: 'RRFSDE288990',
    role: 'Mr. Kay',
  },
  {
    name: 'Lindsay Walton',
    title: 'Year 2',
    email: 'RRFSDE288990',
    role: 'Mr. Kay',
  },
  {
    name: 'Lindsay Walton',
    title: 'Year 8',
    email: 'RRFSDE288990',
    role: 'Mr. Kay',
  },
  {
    name: 'Lindsay Walton',
    title: 'Year 9',
    email: 'RRFSDE288990',
    role: 'Mr. Kay',
  },
];

export default function StudnetListTable() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 w-full'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-lg font-medium leading-6 text-gray-900'>
            Student List
          </h1>
          <p className='mt-2 max-w-xl text-sm text-gray-500'>
            List of all students in database who are officially admitted. <br />
            <b>Total number of students: {null /* number goes here*/}</b>
          </p>
        </div>
      </div>
      <div className='-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg'>
        <table className='min-w-full divide-y divide-gray-300'>
          <thead className='bg-gray-50'>
            <tr>
              <th
                scope='col'
                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
              >
                Name
              </th>
              <th
                scope='col'
                className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'
              >
                Class
              </th>
              <th
                scope='col'
                className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell'
              >
                Admission No
              </th>
              <th
                scope='col'
                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
              >
                Class Teacher
              </th>
              <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {people.map((person) => (
              <tr key={person.email}>
                <td className='w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6'>
                  {person.name}
                  <dl className='font-normal lg:hidden'>
                    <dt className='sr-only'>Title</dt>
                    <dd className='mt-1 truncate text-gray-700'>
                      {person.title}
                    </dd>
                    <dt className='sr-only sm:hidden'>Email</dt>
                    <dd className='mt-1 truncate text-gray-500 sm:hidden'>
                      {person.email}
                    </dd>
                  </dl>
                </td>
                <td className='hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'>
                  {person.title}
                </td>
                <td className='hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'>
                  {person.email}
                </td>
                <td className='px-3 py-4 text-sm text-gray-500'>
                  {person.role}
                </td>
                <td className='py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                  <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                    Edit<span className='sr-only'>, {person.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
