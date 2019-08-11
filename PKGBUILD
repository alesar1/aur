# Maintainer: Marcus Andersson <m.andersson0602 at gmail.com>

pkgname=icons-in-terminal
pkgver=r93.b12286d
pkgrel=3
pkgdesc="Icon fonts in terminal without a need for replacing or patching existing"
url="https://github.com/sebastiencs/icons-in-terminal"
arch=('any')
license=('custom:MIT')
provides=('icons-in-terminal')
conflicts=('icons-in-terminal')
depends=('bash')
makedepends=('git')
source=("git://github.com/sebastiencs/$pkgname.git")
sha1sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$srcdir/$pkgname"

    sed -i 's filename="./build/mapping.txt" filename="/usr/share/icons-in-terminal/mapping.txt" ' print_icons.sh
    ./scripts/generate_fontconfig.sh > "30-$pkgname.conf"
}

package() {
    cd "$srcdir/$pkgname"

    install -dm755 "$pkgdir/usr/share/$pkgname"

    if [ -d "/etc/$pkgname" ]; then
        echo "  Backing up old config folder to location: /usr/share/$pkgname/backup"
        echo "  If you haven't made any changes in the old folder you can safely remove this."
        cp -RT "/etc/$pkgname" "$pkgdir/usr/share/$pkgname/backup"
    fi

    if [ ! -f "/etc/fonts/conf.avail/30-$pkgname.conf" ]; then
        install -dm755 "$pkgdir/etc/fonts/conf.d"
        install -Dm644 "30-$pkgname.conf"       "$pkgdir/etc/fonts/conf.avail/30-$pkgname.conf"
        ln -rs "$pkgdir"/etc/fonts/conf.avail/* "$pkgdir/etc/fonts/conf.d/"
    fi

    install -Dm755 "print_icons.sh"         "$pkgdir/usr/bin/$pkgname"
    install -Dm644 "README.md"              "$pkgdir/usr/share/$pkgname/README.md"
    install -Dm644 "LICENSE"                "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm644 "build/$pkgname.ttf"     "$pkgdir/usr/share/fonts/TTF/$pkgname.ttf"

    find build/ -type f ! -name "*.ttf" -exec install -m644 {} "$pkgdir/usr/share/$pkgname/" \;

    install='icons-in-terminal.install'
}
