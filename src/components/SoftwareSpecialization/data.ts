import xero from '../../assets/images/software/xero.jpg';
import qb from '../../assets/images/software/quickbook.jpg';
import myob from '../../assets/images/software/myob.jpg';
import dext from '../../assets/images/software/dext.jpg';

export interface SoftwareSpecializationData{
     softwareIcon: string;
     softwareName: string;
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
          softwareName: 'QB'
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
          certificationIcon: 'https://example.com/certification-icon-1.jpg',
          certificationName: 'Certification 1'
     }
]

export { softwareSpecializationsData, certificationsData };