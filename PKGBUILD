# Maintainer: Mike Javorski (javmorin) <mike.javorski@gmail.com>
# Contributor: Aaron Miller <aaronm@cldtk.com>

pkgname=aws-sam-cli
pkgver=1.7.0
pkgrel=1
pkgdesc='CLI tool to build, test, debug, and deploy Serverless applications using AWS SAM'
arch=('any')
url='https://github.com/awslabs/aws-sam-cli'
license=('Apache')
depends=('docker' 'python-click' 'python-flask' 'python-boto3' 'python-jmespath' 'python-yaml' 'python-cookiecutter'
         'python-aws-sam-translator' 'python-docker' 'python-dateparser' 'python-dateutil' 'python-requests'
         'python-serverlessrepo' 'python-aws_lambda_builders' 'python-tomlkit' 'python-chevron')
makedepends=('python-setuptools')
options=(!emptydirs)
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz")
sha256sums=('388802de1e79235eb769da7eb00d6f73df989e11b7d5e65260528656131597b2')

prepare() {
  cd "$pkgname-$pkgver"
}

package() {
  cd "$pkgname-$pkgver"

  /usr/bin/python setup.py install --root="$pkgdir/" --optimize=1
}
