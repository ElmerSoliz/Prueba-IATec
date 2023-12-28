import UsersController from '../src/controllers/user.controller';
import { findAll } from '../src/models/user';

jest.mock('../src/models/user');

describe('UsersController', () => {
  let controller;

  beforeEach(() => {
    controller = new UsersController();
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  describe('GetAll', () => {
    test('should return all users', async () => {
      // Arrange
      findAll.mockResolvedValue([
        { id: 1, username: 'john' }, 
        { id: 2, username: 'jane' }
      ]);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      // Act
      await controller.GetAll(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([
        { id: 1, username: 'john' },
        { id: 2, username: 'jane' }  
      ]);
    });

    test('should handle error from findAll', async () => {
      // Arrange
      const errorMessage = 'Error fetching users';
      findAll.mockRejectedValue(new Error(errorMessage));

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Act
      await controller.GetAll(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
    });

    // Add more tests for edge cases, empty array, etc.
  });
});
