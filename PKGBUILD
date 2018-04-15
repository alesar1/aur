# Maintainer: Vlad M. <vlad@archlinux.net>
# Contributor: Morgan Mullaney  <jump@fastmail.fm>
# Contributor: Techlive Zheng <techlivezheng@gmail.com>

pkgname=google-musicmanager
pkgver=1.0.467.4929_r0
pkgrel=1
pkgdesc="A simple application for adding the music files on your computer to your Google Music library"
arch=('i686' 'x86_64')
url="http://music.google.com"
license=('custom:musicmanager')
depends=('flac'
         'fontconfig'
         'libogg'
         'freetype2'
         'libvorbis'
         'xdg-utils'
         'libidn'
         'qt5-webkit'
         'libid3tag'
         'hicolor-icon-theme'
)
optdepends=('log4cxx')
options=(!strip)
source_i686=("https://dl.google.com/linux/musicmanager/deb/pool/main/g/${pkgname}-beta/${pkgname}-beta_${pkgver/_/-}_i386.deb")
source_x86_64=("https://dl.google.com/linux/musicmanager/deb/pool/main/g/${pkgname}-beta/${pkgname}-beta_${pkgver/_/-}_amd64.deb")
sha256sums_i686=('121a7939015e2270afa3f1c73554102e2b4f2e6a31482ff7be5e7c28dd101d3c')
sha256sums_x86_64=('e2bd248a1035ed4454f43299dc239decc1895d0830c83611ca6a1372d7cd5779')


build() {
  tar -xvf data.tar.xz
  tar -xvf control.tar.gz

  #Debian package source files cleaning.
  rm -r {etc,usr,opt/google/musicmanager/product_logo_32.xpm}
}

package() {
  #Auto fetch the latest version.
  install -d $pkgdir/{opt,usr/{bin,share/applications}}

  #Install files.
  cd opt/google/musicmanager
  find . -type d -exec install -d {,${pkgdir}/opt/google/musicmanager/}{} \;
  find . -type f -exec install -D -m 644 {,${pkgdir}/opt/google/musicmanager/}{} \;

  #Make google-musicmanager executable.
  chmod 755 ${pkgdir}/opt/google/musicmanager/{google-musicmanager,minidump_upload,xdg-settings,xdg-mime,MusicManager}

  #Installing icons to /usr/share/icons/hicolor/
  for i in 16 32 48 128
  do
    install -Dm644 $pkgdir/opt/google/musicmanager/product_logo_${i}.png $pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/google-musicmanager.png
  done

  install -Dm644 $pkgdir/opt/google/musicmanager/google-musicmanager.desktop $pkgdir/usr/share/applications

  ln -s /opt/google/musicmanager/google-musicmanager $pkgdir/usr/bin/
}


