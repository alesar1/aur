# Maintainer: Kelsey Maes <kelseymaes at outlook dot com>

_name=azure-cli
pkgname=python-$_name
pkgver=2.0.50
pkgrel=1
pkgdesc="Microsoft Azure Command-Line Tools"
arch=('any')
url="https://github.com/Azure/azure-cli"
license=('MIT')
depends=('python-applicationinsights' 'python-argcomplete' 'python-azure'
         'python-colorama' 'python-humanfriendly' 'python-jmespath' 'python-knack'
         'python-pyopenssl' 'python-pytz' 'python-scp' 'python-sshtunnel' 
         'python-tabulate' 'python-vsts-cd-manager' 'python-yaml')
makedepends=('git' 'python-setuptools')
source=("https://github.com/Azure/azure-cli/archive/azure-cli-${pkgver}.tar.gz")
sha256sums=('decbf866e5a4e22914ed177553b89c0b017bf459eacb16e703766e0eae7efa69')

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
