import { AppDataSource } from '../../data-source';
import { DispatchProcessesEntity } from '../../entities/dispatch-processes.entity';
import { OwnershipProcessesEntity } from '../../entities/ownership-processes.entity';
import { ProcessesClassesEntity } from '../../entities/processes-classes.entity';
import { ProcessesProtocolsEntity } from '../../entities/processes-protocols.entity';
import { ProcessesEntity } from '../../entities/processes.entity';
import { StayedProcessesEntity } from '../../entities/stayed-processes.entity';
import { ViennaProcessesEntity } from '../../entities/vienna-processes.entity';

export const queryService = async (processNumber: string) => {
  const processRepository = AppDataSource.getRepository(ProcessesEntity);
  const processClassesRepository = AppDataSource.getRepository(
    ProcessesClassesEntity
  );
  const dispatchProcessRepository = AppDataSource.getRepository(
    DispatchProcessesEntity
  );
  const processesProtocolsRepository = AppDataSource.getRepository(
    ProcessesProtocolsEntity
  );

  const stayedProcessesRepository = AppDataSource.getRepository(
    StayedProcessesEntity
  );

  const ownershipProcessesRepository = AppDataSource.getRepository(
    OwnershipProcessesEntity
  );
  const viennaProcessesRepository = AppDataSource.getRepository(
    ViennaProcessesEntity
  );

  const [
    processes,
    processesClasses,
    dispatchProcesses,
    processesProtocols,
    stayedProcesses,
    ownershipProcesses,
    viennaProcesses,
  ] = await Promise.all([
    processRepository.find({ where: { num_processo: +processNumber } }),
    processClassesRepository.find({ where: { num_processo: +processNumber } }),
    dispatchProcessRepository.find({ where: { num_processo: +processNumber } }),
    processesProtocolsRepository.find({
      where: { num_processo: +processNumber },
    }),
    stayedProcessesRepository.find({ where: { num_processo: +processNumber } }),
    ownershipProcessesRepository.find({
      where: { num_processo: +processNumber },
    }),
    viennaProcessesRepository.find({ where: { num_processo: +processNumber } }),
  ]);

  return {
    processes,
    processesClasses,
    dispatchProcesses,
    processesProtocols,
    stayedProcesses,
    ownershipProcesses,
    viennaProcesses,
  };
};
