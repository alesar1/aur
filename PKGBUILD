# Maintainer: Daniel Playfair Cal <daniel.playfair.cal@gmail.com>
# Contributor: Yurii Kolesnykov <root@yurikoles.com>

pkgname=slack-wayland
_name="${pkgname%-wayland}"
pkgver=4.18.0
pkgrel=1
pkgdesc="Slack Desktop with system Electron and Ozone enabled for native Wayland support"
arch=('x86_64')
url="https://slack.com/downloads"
license=('custom:proprietary')
depends=('electron')
optdepends=('libappindicator-gtk3: for notification indicator in the status bar on GNOME')
provides=("${_name}" "${_name}-desktop")
conflicts=("${_name}-desktop")
source=("https://downloads.slack-edge.com/linux_releases/slack-desktop-$pkgver-amd64.deb"
        'slack.sh')
sha256sums=('701a8bd2a6c0e793b35092f147dd6639e66a1860ad300088a988f39d45ac0db6'
            '9a6efa826134234744ab83b2a0ff67d99ceb55e5e3efdb776029b3e7d4914ed2')

prepare() {
  bsdtar -xf data.tar.xz

  # Enable slack silent mode and fix icon
  sed -ri \
	-e 's|^(Exec=.+/slack)(.+)|\1 -s\2|' \
	-e 's/^Icon=.+slack\.png/Icon=slack/' \
	"usr/share/applications/${_name}.desktop"
}

package() {
  install -Dm755 "${_name}.sh" "$pkgdir/usr/bin/${_name}"

  install -dm755 "$pkgdir/usr/lib/${_name}/"
  cp -dr --no-preserve=ownership usr/lib/${_name}/resources/* "$pkgdir/usr/lib/${_name}/"

  install -Dm644 "usr/share/applications/${_name}.desktop" -t "$pkgdir/usr/share/applications"
  install -Dm644 "usr/share/pixmaps/${_name}.png" -t "$pkgdir/usr/share/pixmaps"
  install -Dm644 "usr/lib/${_name}/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
