# Maintainer: GordonGR <ntheo1979@gmail.com>

pkgname=singularityviewer-alpha
pkgver=1.8.7.7942
_pkgver=1_8_7_7942
pkgrel=1
pkgdesc="An exciting client for Second Life (secondlife) and OpenSim (opensimulator), which combines the look and feel of Viewer 1.23 with the latest and greatest of available technology. (nighly builds)"
url="http://www.singularityviewer.org/"
license=('custom')
arch=('x86_64')
depends=('apr' 'apr-util' 'gtk2' 'libgl' 'libidn' 'mesa' 'sdl' 'glu' 'pangox-compat' 'gconf' 'libxss' 'libxrandr' 'libxcomposite' 'libgl' 'lib32-zlib' 'libcups' 'atk' 'lib32-util-linux' 'lib32-libidn' 'libxcursor' 'libxtst' 'openal' 'expat' 'freealut')
optdepends=(
	'libpulse: for PulseAudio support'
	'alsa-lib: for ALSA support'
	'lib32-alsa-lib: for ALSA support'
	'nvidia-utils: for NVIDIA support' 
	'flashplugin: for inworld Flash support' 
	'gstreamer0.10: for video support, may need good, bad and ugly plugins')

conflicts=("singularityviewer" "singularityviewer-test")
replaces=("singularityviewer-test")
provides=("singularityviewer")

source=("https://bitbucket.org/router_gray/singularityviewer/downloads/Singularity_Alpha_${_pkgver}_x86_64.tar.xz"
	"singularityviewer.desktop"
	"singularityviewer.launcher")
md5sums=('574ecb8759b1b35544101792f7fcdc98'
         'ff7aa34dcd7548e3acdb3c2d44ae6604'
         'eb596f5cf7b6f2d0c55c0082fb99a905')

package() {
cd $srcdir

# Rename Data Directory
mv Singularity_Alpha_${_pkgver}_x86_64 singularityviewer

# Remove old libraries
#cd $srcdir
cd singularityviewer/
cd lib64/
rm *SDL*
rm *openal*
rm *expat*
rm *apr*
rm *alut*
  
# Install Desktop File
install -D -m644 $srcdir/singularityviewer.desktop \
  $pkgdir/usr/share/applications/singularityviewer.desktop
  
# Install Icon File
install -D -m644 $srcdir/singularityviewer/viewer_icon.png \
  $pkgdir/usr/share/pixmaps/singularityviewer_icon.png
  
# Install Launcher
install -D -m755 $srcdir/singularityviewer.launcher \
  $pkgdir/usr/bin/singularityviewer

# Install License file
install -D -m755 $srcdir/singularityviewer/licenses.txt \
  $pkgdir/usr/share/licenses/$pkgname/LICENSE
    
# Move Data to Destination Directory
cd $srcdir
install -d $pkgdir/opt
mv singularityviewer $pkgdir/opt/
  
# Change Permissions of files to root:games
chown -R root:games $pkgdir/opt/singularityviewer
chmod -R g+rw $pkgdir/opt/singularityviewer

# Make Binary Group-Executable
chmod g+x $pkgdir/opt/singularityviewer/singularity

# Do not re-register the application with the desktop system at every launch, saves from locally installed desktop files.
sed -i 's|./refresh_desktop_app_entry.sh|#./refresh_desktop_app_entry.sh|' $pkgdir/opt/singularityviewer/singularity
}
