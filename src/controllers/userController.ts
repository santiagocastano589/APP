import { Request, response, Response } from 'express';
import Data from "../data";
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      for(let i = 0; i < Data.length; i++) {
        const data = Data[i];
        console.error(data);
        res.status(200).json(data);
      };
      // res.status(200).json(users); 
    } catch (error: any) {
      console.error('Error fetching users: ', error);
      res.status(500).json({ message: 'Error fetching users.' });      
    }
  };

