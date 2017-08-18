pkgname='holo'
pkgver=2.0
pkgrel=1
pkgdesc='Minimalistic configuration management'
arch=('i686' 'x86_64' 'armv7h')
url='http://holocm.org'
license=('GPL3')
depends=()
optdepends=(
    'git: to display diffs using git-diff(1)'
    'openssh: to provision SSH public keys'
    'shadow: to provision user accounts and groups'
)
makedepends=('go' 'perl')
provides=(
    # required for holo-build packages that have a holo-$PLUGIN dependency when there are files below /usr/share/holo/$PLUGIN/
    "holo-files=${pkgver}"
    "holo-run-scripts=${pkgver}"
    "holo-ssh-keys=${pkgver}"
    "holo-users-groups=${pkgver}"
)
replaces=(
    'holo-run-scripts'
    'holo-ssh-keys'
    'holo-users-groups'
)
backup=(
    'etc/holorc'
    'etc/holorc.d/10-files'
    'etc/holorc.d/20-users-groups'
    'etc/holorc.d/25-ssh-keys'
    'etc/holorc.d/95-holo-run-scripts'
)
source=("https://github.com/holocm/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('c6a9170b41e40c630bdbd4cb70e73d2fa5ebe0a8c8da4fb7a07c99ba849c3d6b')

options=('!strip') # binaries are already stripped inside the Makefile

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make
}

check() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make check
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make install DESTDIR="${pkgdir}"
}
