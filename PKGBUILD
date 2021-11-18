# Maintainer: George Rawlinson <george@rawlinson.net.nz>

pkgname=snappymail
pkgver=2.9.3
pkgrel=1
pkgdesc="modern PHP webmail client"
arch=('any')
license=('AGPL3')
url="https://snappymail.eu"
depends=('php-fpm')
makedepends=('nodejs' 'yarn' 'gulp' 'php' 'brotli' 'rollup')
optdepends=(
  'mariadb: storage backend for contacts'
  'php-pgsql: storage backend for contacts'
  'php-sqlite: storage backend for contacts'
)
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/the-djmaze/snappymail/archive/v$pkgver.tar.gz"
  'sysusers.conf'
  'tmpfiles.conf'
)
sha512sums=('7fd0360f2f5df8f1b58c11f7005dcdd383782cbee293aac42d576944c8e55e015df52d323a0d42093438d60ac6fdbbb57bdbd0379dc01a5e072d1d543e0f3500'
            '5dc55dc3655bd2e075dfc69572cde967d4ec9b5ebe27807a893c1beaa681e1af8639a80e3c09d665ddb7a6f40475ae6ad951ca9a243d1533ad68783077a1d51a'
            '991dfdb415f2cff30107addf6fcf9349865a7d91a8e2f2c42b3d561541016f1af41f41aeec23300de8b3d9b75938f14dd073fd6daa245b5fcbcb9ca2166adb48')
b2sums=('0b27c175d4732271ed18c088ffd3543ea97faf6988765769dc0c073fd080c19cfc28dfe8b351977d4e9045c33b50b73a4a0c1bd7e27397bb6c9afd18da220db6'
        'e020b2d4bc694ca056f5c15b148c69553ab610b5e1789f52543aa65e098f8097a41709b5b0fc22a6a01088a9d3f14d623b1b6e9ae2570acd4f380f429301c003'
        'be25b05d775ac4e88065e8018a1026b4c41a073639e59e6520818b7ca578cc93ac2120bd090caf1d255fade69a6680ca764b14cb32f6dd61c80b521d1b16f205')

prepare() {
  # ensure data path is set to /var/lib/snappymail
  sed -i "s/\$sCustomDataPath = '';/\$sCustomDataPath = '\/var\/lib\/$pkgname';/" "$pkgname-$pkgver/$pkgname/v/0.0.0/include.php"

  # create folder for build output
  mkdir -p build
}

build() {
  cd "$pkgname-$pkgver"
  yarn install

  # build snappymail
  php release.php --aur
  bsdtar -x \
    -C "$srcdir/build" \
    -f "build/dist/releases/webmail/$pkgver/$pkgname-$pkgver.tar.gz"
  find . -type d -exec chmod 755 {} \;
  find . -type f -exec chmod 644 {} \;
}

package() {
  # directories
  install -vdm755 "$pkgdir/usr/share/snappymail" \
    "$pkgdir/var/lib/snappymail"

  # application files
  cp -rv "$srcdir/build/snappymail" "$pkgdir/usr/share/snappymail"
  install -vDm644 -t "$pkgdir/usr/share/snappymail" \
    "$srcdir/build/index.php" \
    "$srcdir/build/include.php" \
    "$srcdir/build/serviceworker.js" \
    "$srcdir/build/.htaccess"

  # data files
  cp -rv "$srcdir/build/data" "$pkgdir/var/lib/snappymail"

  # systemd configuration
  install -vDm644 sysusers.conf "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
  install -vDm644 tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
}
