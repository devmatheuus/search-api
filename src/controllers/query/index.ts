import { Request, Response } from 'express';
import { queryService } from '../../services/query';

export const queryController = async (req: Request, res: Response) => {
  const { num_processo } = req.body;

  const {
    processes,
    processesClasses,
    dispatchProcesses,
    processesProtocols,
    stayedProcesses,
    ownershipProcesses,
    viennaProcesses,
  } = await queryService(num_processo);

  return res.status(200).json({
    processos: processes,
    processos_classes: processesClasses,
    processos_despacho: dispatchProcesses,
    processos_protocolos: processesProtocols,
    processos_inciso: stayedProcesses,
    processos_titulares: ownershipProcesses,
    processos_vienna: viennaProcesses,
  });
};