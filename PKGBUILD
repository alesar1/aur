# Maintainer: Squalou <squalou.jenkins [at] gmail [dot] com>
pkgname=google-chat-linux-git
pkgver=0.4.0
pkgrel=2
pkgdesc="Unofficial electron-based desktop client for Google Chat, electron included"
arch=('x86_64' 'i686')
url="https://github.com/squalou/google-chat-linux.git"
electron_version='electron@v7.1.0'
license=('WTFPL')
makedepends=('nodejs' 'npm' 'xz' 'binutils')
appname="${pkgname%-git}"

[[ $CARCH == 'x86_64' ]] && _arch='x64' || _arch='ia32'

source=("${pkgname%}::git+${url}#branch=master"
        "google-chat-linux.desktop")

sha256sums=('SKIP'
            '12e6f3385291d938109f9dd65bd4cce191455c1662a0b347cc03ba45b1832bad')

build() {
  npm install --prefix $srcdir/${pkgname}
  cd "$srcdir/${pkgname}"
  npm run dist
  cd dist
  ar x `ls -1 ${appname}*.deb|head -n 1`
  tar xJf data.tar.xz
  cp ../google-chat-linux.desktop ${srcdir}/${pkgname}/dist/usr/share/applications/google-chat-linux.desktop
#sed -i 's/Name=google-chat-linux/Name=Google Chat Linux/' ${srcdir}/${pkgname}/dist/usr/share/applications/google-chat-linux.desktop


}

package() {
    mv "${srcdir}/${pkgname}/dist/usr" "${pkgdir}/usr"
    mv "${srcdir}/${pkgname}/dist/opt" "${pkgdir}/opt"
}

