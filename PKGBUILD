
# Maintainer: excalibur1234 @forum.manjaro.org

pkgname=pacui
pkgver=1.9
pkgrel=1
pkgdesc="Bash script providing advanced Pacman and Trizen/Yay/Yaourt/Pacaur functionality in a simple UI"
arch=(any)
url="https://github.com/excalibur1234/$pkgname"
license=('GPL3')
depends=('expac' 'wget' 'sudo' 'fzf')
conflicts=("pacui-git")
optdepends=('pacaur: Needed for AUR support.'
        'yaourt: Needed for AUR support.'
        'yay: Needed for AUR support.'
        'trizen: Needed for AUR support.'
        'pacman-mirrors: Needed for Manjaro mirror support'
        'reflector: Needed for Arch Linux mirror support'
        'downgrade: Needed for hidden "downgrade" option.')
source=("$url/archive/$pkgver.tar.gz")
md5sums=('033ccc26857892e8d8f4d83068cd8ec6')

# how to update md5sum:
#  1. do "updpkgsums" inside the folder with PKGBUILD file
#  2. delete .tar.gz file

package () {
        install -Dm755 "$srcdir/$pkgname-$pkgver/pacui" "$pkgdir/usr/bin/pacui"
}
