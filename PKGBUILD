# Maintainer: Jameson Pugh <imntreal@gmail.com>

pkgname=snapcraft
pkgver=2.43
pkgrel=1
pkgdesc="Build Ubuntu snappy packages."
arch=('any')
url="http://snapcraft.io"
license=('GPL')
depends=('python-apt' 'python-requests-oauthlib' 'python-ssoclient' 'python-progressbar'
         'python-requests-toolbelt' 'python-petname' 'python-jsonschema' 'python-yaml'
         'python-magic' 'python-docopt' 'python-tabulate' 'python-pymacaroons-pynacl'
         'python-simplejson' 'python-libarchive-c' 'python-debian')
makedepends=('python-setuptools')
optdepends=('lxd')
options=(!emptydirs)
source=("https://github.com/ubuntu-core/snapcraft/archive/${pkgver}.tar.gz")
sha256sums=('300ba858c7b17a178a5be56043dd6e85b4c030c2364a9adfbbb6096dd380db4b')

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"  

  python setup.py install --root="${pkgdir}/" --optimize=1
}

# vim:set ts=2 sw=2 et:
