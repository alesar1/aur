# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

_name=airnef
pkgbase="python-${_name}"
pkgname=("python-${_name}" "python2-${_name}")
pkgver=1.1
pkgrel=3
pkgdesc="Wireless download from your Nikon/Sony/Canon camera"
arch=('any')
url="http://www.testcams.com/airnef/"
license=('GPL3')
depends=('tk')
makedepends=('python-setuptools' 'python2-setuptools')
source=("http://www.testcams.com/airnef/Version_1.1/airnef_v1.1_Source.zip"
        "airnef-linux.patch")
sha512sums=('b45b0591e42179d1e5b5eea9ede6762d311cd0642585c54568c90111424e2ca316aa444d772b4855afe42f25b6cc4b3e1b78bb5a0c2a4cb52440535894a5cba6'
            'c0337540e1e65cee3d6f4bc3610b6d2d2a72b7f97a0197f5dd27768a5f42f1e4e5e936ce059ff4daf9aa95faa5613228306d6d3f4f2f7ed42c5566521138c24d')
DLAGENTS=('http::/usr/bin/curl -A "Mozilla/4.0" -fLC - --retry 3 --retry-delay 3 -o %o %u')


prepare() {
  cd "${srcdir}/${_name}"

  patch -N -p1 -i "${srcdir}"/airnef-linux.patch
}

package_python-airnef() {
  pkgdesc+=" (for Python 3.x)"
  cd "${srcdir}/${_name}"

  local py_ver=$(python -c 'import sys; print("%i.%i" % sys.version_info[:2])')
  local py_package_dir="/usr/lib/python${py_ver}/site-packages/$_name"
  install -dm755 "${pkgdir}/${py_package_dir}"/appresource
  install *.py "${pkgdir}/${py_package_dir}"
  install airnef.pyw "${pkgdir}/${py_package_dir}"/airnef.py
  install appresource/* "${pkgdir}/${py_package_dir}"/appresource/
  install -dm755 "${pkgdir}"/usr/bin
  ln -s "${py_package_dir}"/airnef.py "${pkgdir}"/usr/bin/airnef
  ln -s "${py_package_dir}"/airnefcmd.py "${pkgdir}"/usr/bin/airnefcmd
}

package_python2-airnef() {
  pkgdesc+=" (for Python 2.x)"

  cd "${srcdir}/${_name}"
  local py_ver=$(python2 -c 'import sys; print "%i.%i" % sys.version_info[:2]')
  local py_package_dir="/usr/lib/python${py_ver}/site-packages/$_name"
  install -dm755 "${pkgdir}/${py_package_dir}"/appresource
  install *.py "${pkgdir}/${py_package_dir}"
  install airnef.pyw "${pkgdir}/${py_package_dir}"/airnef.py
  install appresource/* "${pkgdir}/${py_package_dir}"/appresource/
  install -dm755 "${pkgdir}"/usr/bin
  sed -i 's|env python$|env python2|' "${pkgdir}/${py_package_dir}"/airnef.py
  sed -i 's|env python$|env python2|' "${pkgdir}/${py_package_dir}"/airnefcmd.py
  ln -s "${py_package_dir}"/airnef.py "${pkgdir}"/usr/bin/airnef2
  ln -s "${py_package_dir}"/airnefcmd.py "${pkgdir}"/usr/bin/airnefcmd2
}
