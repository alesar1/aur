# Maintainer: Mike Javorski (javmorin) <mike.javorski@gmail.com>
# Contributor: Aaron Miller <aaronm@cldtk.com>

pkgname=aws-sam-cli
pkgver=1.59.0
pkgrel=1
pkgdesc='CLI tool to build, test, debug, and deploy Serverless applications using AWS SAM'
arch=('any')
url='https://github.com/aws/aws-sam-cli'
license=('Apache')
depends=('docker' 'python-chevron' 'python-click' 'python-flask' 'python-boto3' 'python-jmespath' 'python-yaml'
         'python-cookiecutter' 'python-aws-sam-translator' 'python-docker' 'python-dateparser'
         'python-requests' 'python-serverlessrepo' 'python-aws-lambda-builders' 'python-tomlkit' 'python-watchdog'
         'python-typing-extensions')
makedepends=('python-setuptools')
options=(!emptydirs)
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz")
sha256sums=('4d73767c342cb207a0a18793b028d9b26f8d851a2c7b17abf5c6f7a22f53e367')

prepare() {
  cd "$pkgname-$pkgver"
}

package() {
  cd "$pkgname-$pkgver"

  /usr/bin/python setup.py install --root="$pkgdir/" --optimize=1
}
