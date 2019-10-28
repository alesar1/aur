# Maintainer: Reto Brunner <brunnre8@gmail.com>
# Maintainer: Maxime Poulin <maxpoulin64@gmail.com>
pkgname=thelounge
pkgver=3.3.0
pkgrel=1
pkgdesc='Modern self-hosted web IRC client'
url='https://thelounge.chat/'
arch=('any')
license=('MIT')
depends=('nodejs')
makedepends=('npm')
backup=('etc/thelounge/config.js')
source=(
    "https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz"
    'system.service'
    'user.service'
    'sysusers.d'
    'tmpfiles.d'
)
noextract=("$pkgname-$pkgver.tgz")
sha256sums=('186907ca8eb207962bed57b68de528d977a5d66617147063a6896e884953671a'
            'c92210f6ac8f01c1cd01b6b26793094cd2feea583ed21fab3564d6bcafdc7a20'
            'c609f3309f54bd6285e99ff29ca2464828bec7bbbca67243ee688bd2d605dbf0'
            '30fab63b8a4ffcfdda4c5b8d7c66822a323c4f1de6ca62b77fe9500f4befc0a5'
            '4060efc92346c7193e699ffe1b802d85dc45daa7b5260ecdf70a6b993c30b01a')

package() {
    export NODE_ENV=production

    npm install -g --user root --prefix "$pkgdir/usr" "$pkgname-$pkgver.tgz" --cache "${srcdir}/npm-cache"

    echo /etc/thelounge > "$pkgdir/usr/lib/node_modules/$pkgname/.thelounge_home"

    # add default config
    install -Dm 644 "$pkgdir/usr/lib/node_modules/$pkgname/defaults/config.js" "$pkgdir/etc/thelounge/config.js"

    # services
    install -Dm644 "$srcdir/system.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
    install -Dm644 "$srcdir/user.service" "$pkgdir/usr/lib/systemd/user/$pkgname.service"

    # setting up system user
    install -Dm644 "${srcdir}/sysusers.d" "${pkgdir}/usr/lib/sysusers.d/thelounge.conf"
    install -Dm644 "${srcdir}/tmpfiles.d" "${pkgdir}/usr/lib/tmpfiles.d/thelounge.conf"

    # Non-deterministic race in npm gives 777 permissions to random directories.
    # See https://github.com/npm/npm/issues/9359 for details.
    find "$pkgdir/usr" -type d -exec chmod 755 '{}' +
}
