import xero from '../../assets/images/software/xero.jpg';
import qb from '../../assets/images/software/quickbook.png';
import myob from '../../assets/images/software/myob.jpg';
import dext from '../../assets/images/software/dext.jpg';
import qbCertification from '../../assets/images/software/qb-certification.png';

export interface SoftwareSpecializationData {
     softwareIcon: string;
     softwareName: string;
     certificationName?: string;
     certificationIcon?: string;
}

export interface CertificationsData {
     certificationIcon: string;
     certificationName: string;
}

const softwareSpecializationsData: SoftwareSpecializationData[] = [
     {
          softwareIcon: xero,
          softwareName: "Xero"
     },
     {
          softwareIcon: qb,
          softwareName: 'QB',
          certificationIcon: qbCertification,
          certificationName: 'bookkeeper'
     },
     {
          softwareIcon: myob,
          softwareName: 'MYOB'
     },
     {
          softwareIcon: dext,
          softwareName: 'DEXT'
     },
]

const certificationsData: CertificationsData[] = [
     {
          certificationIcon: xero,
          certificationName: 'Certification 1'
     }
]

export { softwareSpecializationsData, certificationsData };