# Maintainer: Mike Javorski (javmorin) <mike.javorski gmail com>
pkgname=python-aws-lambda-builders
_name=${pkgname#python-}
pkgver=1.16.0
pkgrel=1
pkgdesc='Python library to compile, build & package AWS Lambda functions for several runtimes & framework'
arch=('any')
url="https://github.com/aws/aws-lambda-builders"
license=('Apache')
replaces=('python-aws_lambda_builders')
conflicts=('python-aws_lambda_builders')
depends=('python-six' 'python-wheel')
makedepends=('python-setuptools')
options=(!emptydirs)
source=("https://github.com/aws/${_name}/archive/v$pkgver/${_name}-$pkgver.tar.gz")
sha256sums=('c9e9e95e375bba14a17f1acc798e5cb0356af1643a5433df7385e7e696895673')

package() {
  cd "$srcdir/$_name-$pkgver"
  /usr/bin/python setup.py install --root="$pkgdir/" --optimize=1
}
