# Maintainer: Kelsey Maes <kelseymaes at outlook dot com>

_name=azure-cli
pkgname=python-$_name
pkgver=2.0.25
pkgrel=1
pkgdesc="Microsoft Azure Command-Line Tools"
arch=('any')
url="https://github.com/Azure/azure-cli"
license=('MIT')
depends=('python-applicationinsights' 'python-argcomplete' 'python-azure'
         'python-colorama' 'python-humanfriendly' 'python-jmespath' 'python-knack'
         'python-pytz' 'python-scp' 'python-sshtunnel' 'python-tabulate')
makedepends=('python-setuptools')
source=("https://github.com/Azure/azure-cli/archive/azure-cli-${pkgver}.tar.gz")
md5sums=('d76fada6e41307ca866023a0eb040c6e')

build() {
  cd "$_name-$_name-$pkgver/src"

  for d in azure-cli \
               azure-cli-core \
               azure-cli-nspkg \
               azure-cli-command_modules-nspkg \
               command_modules/azure-cli-*/;
  do cd $d;
     python setup.py build;
     cd -;
  done;
}

package() {
  cd "$_name-$_name-$pkgver/src"

  for d in azure-cli \
               azure-cli-core \
               azure-cli-nspkg \
               azure-cli-command_modules-nspkg \
               command_modules/azure-cli-*/;
  do cd $d;
     python setup.py install --root="$pkgdir" --optimize=1
     cd -;
  done;

  rm "$pkgdir"/usr/lib/python3.?/site-packages/azure/__init__.py
  rm "$pkgdir"/usr/lib/python3.?/site-packages/azure/__pycache__/__init__.*
}
