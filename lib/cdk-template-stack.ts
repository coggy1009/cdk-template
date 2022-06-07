import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class CdkTemplateStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'TheVPC', {
      cidr: '10.0.0.0/21',
      maxAzs: 3,
      subnetConfiguration: [
        {
          
          subnetType: ec2.SubnetType.PUBLIC,
          name: 'SubnetForWebServer',
          cidrMask: 24,
        },
        {
          cidrMask: 24,
          name: 'SubnetForDatabaseServer',
          subnetType: ec2.SubnetType.ISOLATED,
          reserved: true
        }
      ],
    });
//private-subnetも作成できるように。
    
  }
}
