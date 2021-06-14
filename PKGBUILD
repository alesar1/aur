# Maintainer: zoe <chp321 [at] gmail [dot] com>
# Contributor: Arnaud Sevin <nono31 [at] gmail [dot] com>, repo at https://github.com/nono031/cewe-monlivrephoto.git
# Contributor: Jozef Riha <jose1711 at gmail dot com>
# Contributor: ManU	<manolo89 [at] online [dot] de>
# Contributor: DonJaime	<DonJaime [at] freenet [dot] de>
# forked from cewe-fotoservice by James Crompton, itself forked from cewe-fotobuch, originally by Jozef Riha, updated by Manuel Conzelmann
# Updated by Zoe <chp321 at gmail dot com>, for french version

_keyaccount=7884
# what they call their package ($APPLICATION_NAME in install.pl)
_productUrname='Logiciel de création CEWE'
# what I want to call it ; UTF-8 does not like accents
_productRename='Logiciel_de_creation_CEWE'
_setupFilename='setup_Logiciel_de_creation_CEWE'

pkgname=cewe-monlivrephoto-fr
conflicts=('cewe-monlivrephoto-fnac' 'cewe-monlivrephoto' 'cewe-fotowelt' 'cewe-fotobuch' 'cewe-fotoservice' 'mullerfoto-fotostar_de' 'mullerfoto-fotostar_cz' 'mullerfoto-fotostar_sk')
pkgdesc="Création off-line de livres-photos, calendriers, posters…, disponibles ensuite en ligne auprès de cewe.fr (France)"
# setup_Logiciel_de_creation_CEWE (script perl) is versatile too much, so it is better to skip its md5sum :
md5sums=(SKIP
         '816ecb83b920d7128d70a697fa384130'  ## updater.pl
         '98a86bbf8e9c378e1bddf0f4d2440884') ## $pkgname.install

pkgver=7.1.3
pkgrel=2
url="https://www.cewe.fr/"
license=("custom:eula")
#depends=('libx11' 'libjpeg' 'curl' 'wget' 'gstreamer0.10-base-plugins' 'snappy')
depends=('libx11' 'libjpeg' 'curl' 'wget' 'snappy')
makedepends=('unzip' 'xdg-utils')
arch=('i686' 'x86_64')
source=("https://dls.photoprintit.com/download/Data/$_keyaccount-fr_FR/hps/$_setupFilename.tgz"
	'updater.pl' "$pkgname.install")
install=$pkgname.install
_installDir=/usr/share/$pkgname

pkgver() {
	grep 'my $HPS_VER' $srcdir/install.pl | grep -Po '[\d\.]+'
}

package() {
	# put icons and mimetype in the right place
	export XDG_UTILS_INSTALL_MODE=system
	export XDG_DATA_DIRS="$pkgdir/usr/share:"

	_installDir=$pkgdir$_installDir
	mkdir -p $_installDir $pkgdir/usr/{bin,share/icons/hicolor,share/mime/packages,share/applications}

	cd $srcdir
	# don't clear screen, install broken desktop file, or burble
	sed -i 's/^\s*\(system("clear"\|system("update-mime-database \|createDesktopShortcuts(\|printf(\$TRANSLATABLE\).*;//' install.pl

	# don't show EULA/ask for confirmation (EULA is addressed in install script)
	update='--update'
	# keep packages unless updating from within application
	[[ -z "$_UPDATING" ]] && keepPackages='-k' || update='--upgrade'

	./install.pl $update $keepPackages --installDir=$_installDir -v
	install -m644 -b updater.pl $_installDir/updater.pl
	install -D -m644 $srcdir/EULA.txt $pkgdir/usr/share/licenses/$pkgname/EULA.txt
    # pixmap for legacy customised mimetypes
	install -D -m644 $_installDir/Resources/keyaccount/32.xpm $pkgdir/usr/share/pixmaps/$pkgname.xpm

	# create startup script and desktop file
	cat > $pkgdir/usr/bin/$pkgname <<-EOF
		#!/usr/bin/bash
		cd ${_installDir#$pkgdir}
		# nouveau bug with QT web engine: https://bugreports.qt.io/browse/QTBUG-41242
		lsmod | grep nouveau && export QT_XCB_FORCE_SOFTWARE_OPENGL=1
		exec ./"${_productUrname/_/ }" "\$@"
	EOF
	cat > $pkgdir/usr/share/applications/$pkgname.desktop <<-EOF
		[Desktop Entry]
		Type=Application
		Name=$_productRename
		Comment=Offline client for cewe.fr service, non-branded french version
		Exec=$pkgname
		Icon=hps-$_keyaccount-$pkgver
		StartupNotify=true
		Categories=Graphics;Photography;
		MimeType=application/x-hps-mcf
	EOF
	chmod 755 $pkgdir/usr/bin/$pkgname $pkgdir/usr/share/applications/$pkgname.desktop

	# adjust product name in mimetype comment
	sed -i "s/$_productUrname/$_productRename/" $pkgdir/usr/share/mime/packages/*
	# remove unneeded mime cache files and installation logs
	rm -d $pkgdir/usr/share/mime/application/* $pkgdir/usr/share/mime/* \
		$_installDir/.log/* $_installDir/.log &> /dev/null || true
	echo
}
