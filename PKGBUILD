# Maintainer: ichundes <derago@gmail.com>
pkgname='pyrescene-hg'
pkgver=816
pkgrel=4
pkgdesc='pyReScene is a port of ReScene .NET to the Python programming language.'
url='https://bitbucket.org/Gfy/pyrescene-hg'
arch=('any')
license=('MIT' 'GPL' 'Custom')
depends=('python' 'unrar' 'lib32-libstdc++5')
optdepends=('chromaprint')
makedepends=('mercurial' 'git')
provides=("pyrescene")
conflicts=("pyrescene")
source=('pyrescene-hg::hg+https://bitbucket.org/Gfy/pyrescene-hg/' 'git://github.com/dryes/rarlinux.git')
md5sums=('SKIP'
         'SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  hg identify -n
}

package() {
  cd "${srcdir}/${pkgname}"

  cp 'rescene/srr.py' 'rescene/srr.py~'
  sed -i -r 's|(dest=\"rar_executable_dir\",)|\1 default=\"/opt/rarlinux\",|' 'rescene/srr.py'
  python 'setup.py' install --root="${pkgdir}"
  mv 'rescene/srr.py~' 'rescene/srr.py'

  mkdir -p "${pkgdir}/opt/rarlinux"
  python 'bin/preprardir.py' "${srcdir}/rarlinux" "${pkgdir}/opt/rarlinux"
  chown -R root:root "${pkgdir}/opt/rarlinux"
  chmod -R a+x "${pkgdir}/opt/rarlinux"
  # RAR 5.50 breaks pyrescene
  rm "${pkgdir}/opt/rarlinux/2017-08-11_rar550"

  install -D -m755 "awescript/awescript.py" "${pkgdir}/usr/bin/awescript"
}
