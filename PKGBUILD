# Contributor: twa022 <twa022 at gmail dot com>

pkgname=python-system_hotkey
_pkgver=1.0.2
pkgver=1.0.2+12+37073bb
pkgrel=2
pkgdesc="Python library for system wide hotkeys"
arch=('any')
url="https://github.com/timeyyy/system_hotkey"
license=('BSD')
depends=('python-xcffib')
makedepends=('python-setuptools' 'git')
source=("${pkgname}::git+https://github.com/timeyyy/system_hotkey"
        'python3.10_fix.patch')
sha256sums=('SKIP'
            '2f15f1ebeb95e1b3e9cccfeac6f05da1af98b634834d912d02e807c3cc0a0df2')
_release_commit='f30711752d0d4510cda2a213e4ec9c665677e167'
#source=("${pkgname}-${pkgver}.tar.gz::https://github.com/timeyyy/${pkgname/python-/}/archive/${pkgver}.tar.gz")
#sha256sums=('4d6e06bf359efecf4bea251e330c852f83b9150f503df28fd94239499f4ff606')

prepare() {
  cd "${srcdir}/${pkgname}"
  patch -uNp2 -r- -i ../python3.10_fix.patch
}

pkgver() {
#  cd "${srcdir}/${pkgname/python-/}-${pkgver}"
  cd "${srcdir}/${pkgname}"
  printf "%s+%s+%s" "${_pkgver}" "$(( `git rev-list --count HEAD` - `git rev-list --count ${_release_commit}` ))" "$( git describe --always )"
}

package() {
#  cd "${srcdir}/${pkgname/python-/}-${pkgver}"
  cd "${srcdir}/${pkgname}"
  python setup.py install --root="${pkgdir}"
}
