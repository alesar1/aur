# Maintainer: Cayde Dixon <me@cazzar.net>
# Contributor: Anthony Anderson <aantony4122@gmail.com>


_branch='-ptb'

pkgname='discord-ptb'
pkgver=0.0.9
pkgrel=1
pkgdesc="All-in-one voice and text chat for gamers that's free and secure."
arch=('x86_64')
url='https://discordapp.com/'
provides=('discord')
license=('custom')
depends=('gtk2' 'gconf' 'libnotify' 'libxss' 'glibc' 'alsa-lib' 'nspr' 'nss' 'libc++')
optdepends=(
  'libpulse: For pulseaudio support'
  'noto-fonts-emoji: Google font for emoji support.'
  'ttf-symbola: Font for emoji support.'
)

install="DiscordPTB.install"
source=(DiscordPTB.desktop LICENSE)
source_x86_64=("https://dl${_branch}.discordapp.net/apps/linux/${pkgver}/discord${_branch}-${pkgver}.tar.gz")
md5sums=('6a23b54347910ff151fce2023589b27e'
         '26b3229c74488c64d94798e48bc49fcd')
md5sums_x86_64=('db2bbf313309bd8d139ae92d2ae7a10e')



#This is always latest build, right now I do not know of a version param.

package() {
  # Install the main files.
  install -d "${pkgdir}/opt/${pkgname}"
  cp -a "${srcdir}/DiscordPTB/." "${pkgdir}/opt/${pkgname}"

  # Exec bit
  chmod 755 "${pkgdir}/opt/${pkgname}/DiscordPTB"


  # Desktop Entry
  install -d "${pkgdir}/usr/share/applications"
  install "${srcdir}/DiscordPTB.desktop" "${pkgdir}/usr/share/applications"

  # Main binary
  install -d "${pkgdir}/usr/bin"
  #install "${srcdir}/Discord.sh" "${pkgdir}/usr/bin/discord"
  ln -s "/opt/${pkgname}/DiscordPTB" "${pkgdir}/usr/bin/${pkgname}"

  # Create symbolic link to the icon
  install -d "${pkgdir}/usr/share/pixmaps"
  ln -s "/opt/${pkgname}/discord.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"

  # License
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
