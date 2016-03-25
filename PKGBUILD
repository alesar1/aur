# Maintainer: Weitian Leung <weitianleung[at]gmail[dot]com>

pkgname=bing-wallpaper-git
pkgver=r29
pkgrel=2
pkgdesc="Change wallpaper from Bing daily"
arch=(any)
url="https://github.com/marguerite/linux-bing-wallpaper"
license=('GPL3')
depends=('curl' 'bc')
optdepends=('xfconf: for xfce4 support'
            'pcmanfm-qt: for lxqt support')
makedepends=('git')
source=("$pkgname::git+https://github.com/marguerite/linux-bing-wallpaper.git"
        'bing-wallpaper-autostart.sh'
        'bing-wallpaper.desktop')
md5sums=('SKIP'
         '056c9b4f32857e684536b42a972ea0fc'
         '1e65c7c30461dcc752f4766e5a14bc76')

pkgver() {
    cd "$srcdir/$pkgname"
    printf "r%s" "$(git rev-list --count HEAD)"
}

package() {
    install -d "$pkgdir/usr/lib/bing-wallpaper"
    cp "$srcdir/$pkgname/"*.sh "$pkgdir/usr/lib/bing-wallpaper"

    install -d "$pkgdir/usr/bin"
    cp bing-wallpaper-autostart.sh "$pkgdir/usr/bin"

    install -d "$pkgdir/etc/xdg/autostart"
    cp bing-wallpaper.desktop "$pkgdir/etc/xdg/autostart"
}
