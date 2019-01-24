# Maintainer: Andy Botting <andy@andybotting.com>

pkgname=('python-barbicanclient' 'python2-barbicanclient')
pkgver='4.8.1'
pkgrel='1'
pkgdesc='Client library for the Barbican Key Management API'
arch=('any')
url="http://docs.openstack.org/developer/${pkgname}"
license=('Apache')
makedepends=('python-pbr' 'python2-pbr'
             'python-prettytable' 'python2-prettytable'
             'python-requests' 'python2-requests'
             'python-six' 'python2-six'
             'python-cliff' 'python2-cliff'
             'python-keystoneauth1' 'python2-keystoneauth1'
             'python-oslo-i18n' 'python2-oslo-i18n'
             'python-oslo-serialization' 'python2-oslo-serialization'
             'python-oslo-utils' 'python2-oslo-utils')
checkdepends=('python-fixtures' 'python2-fixtures'
              'python-requests-mock' 'python2-requests-mock'
              'python-mock' 'python2-mock'
              'python-testrepository' 'python2-testrepository'
              'python-testtools' 'python2-testtools'
              'python-oslotest' 'python2-oslotest'
              'python-nose' 'python2-nose'
              'python-oslo-config' 'python2-oslo-config'
              'python-openstackclient' 'python2-openstackclient')
source=("https://github.com/openstack/${pkgname}/archive/${pkgver}.tar.gz")
sha512sums=('4a99a32d8950957ab2548353a3b4275b95bc830f1b479c1d5592e884af4263ed937080e8ec9ce21dddfe3c42f2370d3278babd9332a318ac43c1c387404ca592')

prepare() {
  cp -a "${srcdir}/${pkgname}-${pkgver}"{,-py2}
  cd "${srcdir}/${pkgname}-${pkgver}"
  sed -i 's/assertItemsEqual/assertCountEqual/g' barbicanclient/tests/v1/*.py
  export PBR_VERSION=$pkgver
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py build

  cd "${srcdir}/${pkgname}-${pkgver}-py2"
  python2 setup.py build
}

check() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  stestr run

  cd "${srcdir}/${pkgname}-${pkgver}-py2"
  PYTHON=python2 stestr2 run
}

package_python-barbicanclient() {
  depends=('python-pbr' 'python-six' 'python-requests' 'python-cliff'
           'python-keystoneauth1' 'python-oslo-i18n'
           'python-oslo-serialization' 'python-oslo-utils')
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-barbicanclient() {
  depends=('python2-pbr' 'python2-six' 'python2-requests' 'python2-cliff'
           'python2-keystoneauth1' 'python2-oslo-i18n'
           'python2-oslo-serialization' 'python2-oslo-utils')
  cd "${srcdir}/python-barbicanclient-${pkgver}-py2"
  python2 setup.py install --root="${pkgdir}" --optimize=1
  mv "${pkgdir}"/usr/bin/barbican{,2}
}

# vim:set ts=2 sw=2 et:
