# Maintainer: Oliver Ford <dev.aur@ojford.com>
# shellcheck disable=SC2034,SC2154
pkgname=polybar-spotify
pkgver=20200619_b5c59238a17180affae5232c234175524a17d1c4
pkgrel=1
pkgdesc='A tool to generate custom Iosevka fonts from a configuration file'
url='https://github.com/Jvanrhijn/polybar-spotify'
license=('MIT')
ref="${pkgver:9}"
source=("${url}/archive/${ref}.zip")
md5sums=('815b25c418611c58370733479bd2b504')
arch=('any')
depends=(
    'python'
    'python-dbus'
    'spotify'
)
optdepends=(
)
conflicts=(
)

package() {
    set -e
    cd "$pkgname-$ref"

    mkdir -p "$pkgdir/usr/bin"
    install -D -m755 "./spotify_status.py" "$pkgdir/usr/bin/$pkgname"
}
