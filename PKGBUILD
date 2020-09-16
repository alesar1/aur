# Maintainer: Torben <git at letorbi dot com>

pkgname=processing4
pkgver=4.0a2
pkgrel=1
arch=(x86_64)
pkgdesc='Programming environment for creating images, animations and interactions'
url='https://github.com/processing/processing4'
license=(GPL LGPL)
depends=('jdk11-openjdk' 'libgl')
# TODO add jogl as make-dependency once a package for version 2.4.0 exists
makedepends=('ant' 'gendesk' 'java11-openjfx' 'unzip')
options=(!strip)
source=("https://github.com/processing/processing4/archive/processing-$((1269+${pkgver##4.0a}))-$pkgver.tar.gz"
        'https://download.processing.org/reference.zip'
        always_use_java-11-openjdk.patch
        change_cmd_name.patch
        derive_jdk_from_path.patch
        disable_update_check.patch
        no_downloads.patch
        use_system_libraries.patch)
sha256sums=('919e3034796e841e3bee07dea48ddafcf1efdef85b2beea718007a89a097c9c0'
            '2014fdb12f979f79c624acc514c14ce318f07cb2cc15a63e1b4febaff733f2a5'
            '66e87536b740194954670c482d698fc3183995bf48f580078511d50d1a3f0323'
            '7f821db61160248b65df19b018dc3b2ba7cc995564dd389bb83b3ce8e5097119'
            'fcd5c5ea558ceadde3f840522a5c1cb11e26569aec651e8154194cca39026611'
            '35c4538e6e57c0ea296c6cea590cabeb2b0772f9a431838df270dcc581321e30'
            'a07184b87d3d2ccd35525a0721df787973f92487bae367a0668abd3f64134263'
            '6115cced44fcf1cadd945cbb5a09692a3956259c294351bdec27469f1fd03163')

prepare() {
  # Create .desktop file
  gendesk -f -n --pkgname=processing4 --pkgdesc="$pkgdesc" --name="Processing 4"

  # Symbolic link for not having to repeat the revision number
  ln -sf "processing4-processing-"*"-$pkgver" $pkgname

  # Copy reference.zip to the java directory
  mkdir -p $pkgname/java
  cp reference.zip $pkgname/java/

  # Create missing directories
  mkdir -p $pkgname/build/linux/work/java

  # Don't download any files during Ant's build process
  patch $pkgname/build/build.xml < no_downloads.patch

  # Use system libraries instead of the ones included in the processing4 repo
  patch $pkgname/core/build.xml < use_system_libraries.patch

  # Disable update check in default preferences
  patch $pkgname/build/shared/lib/defaults.txt < disable_update_check.patch

  # Derive JDK location from java binary found in PATH
  patch $pkgname/build/linux/processing < derive_jdk_from_path.patch

  # Always use OpenJDK 11 to run processing
  patch $pkgname/build/linux/processing < always_use_java-11-openjdk.patch

  # Change command name to 'processing4'
  patch $pkgname/build/linux/processing < change_cmd_name.patch
}

build() {
  cd "$pkgname/build"

  PATH="/usr/lib/jvm/java-11-openjdk/bin/:$PATH" ant build
}

package() {
  cd "$pkgname"

  install -d "$pkgdir/usr/"{bin/,share/processing4/}
  cp -r build/linux/work/* "$pkgdir/usr/share/processing4/"

  # Desktop shortcut
  install -Dm644 "build/shared/lib/icons/pde-256.png" \
    "$pkgdir/usr/share/pixmaps/processing4.png"
  install -Dm644 "$srcdir/processing4.desktop" \
    "$pkgdir/usr/share/applications/processing4.desktop"

  # Symbolic links in /usr/bin
  ln -s "/usr/share/processing4/processing" "$pkgdir/usr/bin/processing4"
  ln -s "/usr/share/processing4/processing-java" "$pkgdir/usr/bin/processing4-java"

  # Ensure that processing uses the Java version selected by PATH
  rmdir "$pkgdir/usr/share/processing4/java"
  mkdir -p "$pkgdir/usr/share/processing4/java/bin/"
  echo -e '#!/bin/sh\n`which java` "$@"' > "$pkgdir/usr/share/processing4/java/bin/java"
  chmod a+x "$pkgdir/usr/share/processing4/java/bin/java"
}
