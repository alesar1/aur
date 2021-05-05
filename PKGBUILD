# Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: Fancy <springzfx at gmail.com>

pkgbase=lx-music-desktop
pkgname=('lx-music-desktop-bin')
conflicts=('lx-music-desktop')
pkgver=1.9.0
pkgrel=1
pkgdesc="A music software based on Electron + Vue. 一个基于 Electron + Vue 开发的音乐软件。"
arch=('x86_64')
url="https://github.com/lyswhut/lx-music-desktop"
license=('Apache-2.0')
# Get depends from command: pacman -Qip lx-music-desktop.v${pkgver}.x64.pacman
# E.g: pacman -Qip lx-music-desktop.v1.2.0.x64.pacman
# Then copy the `Depends On(依赖于)` field.
depends=('c-ares' 'ffmpeg' 'gtk3' 'http-parser' 'libevent' 'libvpx' 'libxslt' 'libxss' 'minizip' 'nss' 're2' 'snappy' 'libnotify' 'libappindicator-gtk3')
source=("https://github.com/lyswhut/lx-music-desktop/releases/download/v${pkgver}/lx-music-desktop.v${pkgver}.x64.pacman")
md5sums=('0d55bf8e1742943b4a19709374358b35')
# copy .INSTALL script from lx-music-desktop.v${pkgver}.x64.pacman
# E.g: tar xf lx-music-desktop.v1.2.0.x64.pacman .INSTALL && mv -fv .INSTALL lx-music-desktop.install
install=lx-music-desktop.install

package() {
	cp -r opt/ usr/ "${pkgdir}"
}
