import { Request, Response } from 'express';
import { queryService } from '../../services/query';

export const queryController = async (req: Request, res: Response) => {
  const { process_number } = req.query;

  const {
    processes,
    processesClasses,
    dispatchProcesses,
    processesProtocols,
    stayedProcesses,
    ownershipProcesses,
    viennaProcesses,
  } = await queryService(process_number as string);

  return res.status(200).json({
    processos: processes,
    processos_classes: processesClasses,
    processos_despacho: dispatchProcesses,
    processos_protocolos: processesProtocols,
    processos_sobrestadores: stayedProcesses,
    processos_titulares: ownershipProcesses,
    processos_vienna: viennaProcesses,
  });
};
