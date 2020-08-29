# Maintainer: GordonGR <ntheo1979@gmail.com>
# Contributor: mikers <mikeonthecomputer@gmail.com>
# Contributor: Splex

pkgname=kokua-secondlife
pkgver=6.4.7.49070
_pkgver=6_4_7_49070
_pkgprever=6.4.7
pkgrel=1
pkgdesc="An Open Source third party viewer for Second Life® (secondlife), only."
#url="http://www.kokuaviewer.org"
url="https://kokua.atlassian.net"
license=('GPL')
arch=('x86_64')
depends=('apr-util' 'glib2>=2.32' 'libgl' 'libidn' 'mesa' 'sdl' 'glu' 'pangox-compat' 'gconf' 'libxss' 'libxrandr' 'libxcomposite' 'libgl' 'lib32-zlib' 'libcups' 'atk' 'lib32-libsndfile' 'lib32-util-linux' 'lib32-libidn' 'libxcursor' 'libxtst')
optdepends=('libpulse: for PulseAudio support'
	'alsa-lib: for ALSA support'
	'lib32-alsa-plugins: for voice support'
	'nvidia-utils: for NVIDIA support' 'pepper-flash: for inworld Flash support'
	'gstreamer0.10: for video support, may need good, bad and ugly plugins'
	'lib32-freealut: for OpenAL support'
	'lib32-libidn11: for voice support'
	'pangox-compat: for media_plugin_webkit to work')
conflicts=('kokua-opensim')

source=("https://svwh.dl.sourceforge.net/project/kokua.team-purple.p/Kokua-SL/Linux64Bit/Kokua_RLV_${_pkgver}_x86_64.tar.bz2"
	'kokua-secondlife.desktop'
	'kokua-secondlife.launcher')
md5sums=('4a0cb2352c61ca75c3f94c8ca43c47e2'
         '3893a2c8ae9cb8e2adb4d7c47750029b'
         'e12fd7bd333f4f810dec66f1be17c71c')

package() {
cd $srcdir
  
# Rename Data Directory
mv "Kokua_RLV_${_pkgver}_$CARCH" kokua-secondlife

# Install Desktop File
install -D -m644 $srcdir/kokua-secondlife.desktop \
  $pkgdir/usr/share/applications/kokua-secondlife.desktop

# Install Icon File
install -D -m644 $srcdir/kokua-secondlife/kokua_icon.png \
  $pkgdir/usr/share/pixmaps/kokua-secondlife.png

# Install Launcher
install -D -m755 $srcdir/kokua-secondlife.launcher \
  $pkgdir/usr/bin/kokua-secondlife

# Move Data to Destination Directory
install -d $pkgdir/opt
mv kokua-secondlife $pkgdir/opt/

# Change Permissions of files to root:games
chown -R root:games $pkgdir/opt/kokua-secondlife
chmod -R g+rw $pkgdir/opt/kokua-secondlife

# Make Binary Group-Executable
chmod g+x $pkgdir/opt/kokua-secondlife/kokua

# Do not re-register the application with the desktop system at every launch, saves from locally installed desktop files.
sed -i 's|./etc/refresh_desktop_app_entry.sh|#./etc/refresh_desktop_app_entry.sh|' $pkgdir/opt/kokua-secondlife/kokua
   
}
