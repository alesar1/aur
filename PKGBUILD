# Maintainer: Edvin Alvarado <ealvarado301 g-mail>
pkgname=nanominer
pkgver=3.3.7
pkgrel=1
pkgdesc="nanopool mining software"
arch=('any')
license=('custom:nanopool')
install=$pkgname.install
url='https://github.com/nanopool/nanominer/releases'
sha256sums=("bbc1ee4fc3b4fa17de1a6c476a781474435f2ffefcec8fcb99e45a55e1e446b1"
			"SKIP")

prepare() {
	cd $pkgname-linux-$pkgver
	
	# copies config files in config_examples
	mkdir -p config_examples
	for FILE in config*.ini
	do
		cp -R $FILE ./config_examples/$FILE	
	done

	# Avoids erasing existing config files to avoid erasing any user settings
	for FILE in $pkgdir/opt/$pkgname/config*.ini
	do
		FILENAME=${FILE##*/}
		for SRCFILE in config*.ini
		do
			if [ $FILENAME==$SRCFILE  ]
			then
				rm $SRCFILE
			fi
		done
	done
}

source=("https://github.com/nanopool/$pkgname/releases/download/v$pkgver/$pkgname-linux-$pkgver.tar.gz"
		"https://github.com/nanopool/$pkgname/raw/master/Terms%20of%20Use%20Nanominer.pdf")

package() {

	# Launcher
	echo -e "#\!/bin/bash\ncd /opt/nanominer\nexec /opt/$pkgname/nanominer \$*" > nanominer.sh  
	install -Dm755 nanominer.sh "$pkgdir"/usr/bin/nanominer

	# License
	install -Dm644 Terms%20of%20Use%20Nanominer.pdf "$pkgdir"/usr/share/licenses/"$pkgname"/TOU_Nanominer.pdf

	# Install
	mkdir -p $pkgdir/opt/"$pkgname" 
	cp -R "$pkgname-linux-$pkgver"/* $pkgdir/opt/"$pkgname" 
}

