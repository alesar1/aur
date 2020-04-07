# Maintainer: xXR01I1Xx <xxr01i1xx@tuta.io>
pkgname=session-desktop-git
_ver=1.0.6
_commit=a5961de
pkgver=$_ver.$_commit
pkgrel=2
pkgdesc="Private messaging from your desktop"
arch=(x86_64)
url="https://getsession.org"
license=('GPL-3.0')
depends=(libxtst nss alsa-lib libxss libnotify xdg-utils)
makedepends=('git' 'nvm' 'yarn')
optdepends=('libappindicator-gtk3: for tray support')
provides=(session-messenger-desktop)
conflicts=(session-desktop session-desktop-bin session-desktop-appimage)
options=(!strip)
install=$pkgname.install
source=('git+https://github.com/loki-project/session-desktop.git'
        'session-desktop.desktop'
        'patch.diff.example')
sha256sums=('SKIP'
            '931e317b69e5c5ed3ef1f2ff0c82bf72b8706ab5ac50ad0564f3f164d7d5f7b8'
            '0916d4657e0bb4c21280300dc9a4632e7353a701ae6d355995b91ee417d16a87')

prepare() {
  cd $srcdir/session-desktop
  git checkout $_commit
  echo "Applying patch"
  sed "s/ver_placeholder/$_ver-$_commit/g" $srcdir/patch.diff.example > $srcdir/patch.diff
  git apply $srcdir/patch.diff
  source /usr/share/nvm/init-nvm.sh && nvm install 10.13.0
}

build() {
  cd "$srcdir/session-desktop"
  source /usr/share/nvm/init-nvm.sh && nvm use --delete-prefix v10.13.0 --silent
  export SIGNAL_ENV=production
  yarn install --frozen-lockfile
  yarn generate
  yarn lint-full
  $(yarn bin)/electron-builder --config.extraMetadata.environment=$SIGNAL_ENV --publish=never --config.directories.output=release --linux tar.xz
}

package() {
  mkdir -p $pkgdir/usr/share/applications
  mkdir -p $pkgdir/opt/
  mkdir -p $pkgdir/usr/share/icons/hicolor/16x16/apps/
  mkdir -p $pkgdir/usr/share/icons/hicolor/24x24/apps/
  mkdir -p $pkgdir/usr/share/icons/hicolor/32x32/apps/
  mkdir -p $pkgdir/usr/share/icons/hicolor/48x48/apps/
  mkdir -p $pkgdir/usr/share/icons/hicolor/64x64/apps/
  mkdir -p $pkgdir/usr/share/icons/hicolor/128x128/apps/
  mkdir -p $pkgdir/usr/share/icons/hicolor/256x256/apps/
  mkdir -p $pkgdir/usr/share/icons/hicolor/512x512/apps/
  mkdir -p $pkgdir/usr/share/icons/hicolor/1024x1024/apps/

  cp $srcdir/session-desktop/build/icons/png/16x16.png $pkgdir/usr/share/icons/hicolor/16x16/apps/session-messenger-desktop.png
  cp $srcdir/session-desktop/build/icons/png/24x24.png $pkgdir/usr/share/icons/hicolor/24x24/apps/session-messenger-desktop.png
  cp $srcdir/session-desktop/build/icons/png/32x32.png $pkgdir/usr/share/icons/hicolor/32x32/apps/session-messenger-desktop.png
  cp $srcdir/session-desktop/build/icons/png/48x48.png $pkgdir/usr/share/icons/hicolor/48x48/apps/session-messenger-desktop.png
  cp $srcdir/session-desktop/build/icons/png/64x64.png $pkgdir/usr/share/icons/hicolor/64x64/apps/session-messenger-desktop.png
  cp $srcdir/session-desktop/build/icons/png/128x128.png $pkgdir/usr/share/icons/hicolor/128x128/apps/session-messenger-desktop.png
  cp $srcdir/session-desktop/build/icons/png/256x256.png $pkgdir/usr/share/icons/hicolor/256x256/apps/session-messenger-desktop.png
  cp $srcdir/session-desktop/build/icons/png/512x512.png $pkgdir/usr/share/icons/hicolor/512x512/apps/session-messenger-desktop.png
  cp $srcdir/session-desktop/build/icons/png/1024x1024.png $pkgdir/usr/share/icons/hicolor/1024x1024/apps/session-messenger-desktop.png

  tar xf $srcdir/session-desktop/release/session-messenger-desktop-linux-x64-$_ver-$_commit.tar.xz -C $pkgdir/opt/
  mv $pkgdir/opt/session-messenger-desktop-linux-x64-$_ver-$_commit $pkgdir/opt/Session
  cp $srcdir/session-desktop.desktop $pkgdir/usr/share/applications/
}
