# Maintainer: Dmitry Barker Medvedev <dimon@bitel.ru>
pkgname=bgbillingrunner
pkgver=1907121757
pkgrel=2
pkgdesc='Client runner for billing system BGBilling 8.0+'
arch=('i686' 'x86_64')
url='http://bgbilling.ru'
license=('custom')
depends=('java-runtime>=8')
install=bgbillingrunner.install
source=(bgbillingrunner.sh bgbillingrunner.desktop bgbillingrunner.png)
md5sums=('d4139a7f14b60ea83b3a1e4b4acfe53e'
         '2702367e788dd74bbf8f135329e6f3c2'
         'b26bc923ad15a117c129441768117b19')
replaces=(bgbillingclient72,bgbillingclient80)

# vesions: major, build, version suffix for package
_versuf=$(echo ${_vermajor}|sed -e "s/\.//g")
# product/archive name
_achivename=BGBillingRunner
# program directory name
_dstdirname=bgbillingrunner

_patch_var_file() {
	local file="$1"
	v2="s/\\\${pkgver}/${pkgver}/g"
	sed -i "$v2" $file
}

pkgver() {
	wget --no-remove-listing ftp://ftp.bgbilling.ru/pub/bgbilling/runner/${_achivename}_*.zip
	# -rw-r--r--    2 0        0           89790 Jul 12 17:57 BGBillingRunner_1907121757.zip
	_ver=$(grep -o -P --max-count=1 "${_achivename}_(\d+)" .listing)
	_v2=$(echo ${_ver}|cut -d'_' -f2)  # 1901091804
	echo "${_v2}"
}

package() {
	msg2 "unzip distributive"
	unzip -o ./${_achivename}_${pkgver}.zip

	msg2 "create structure"
	mkdir $pkgdir/opt
	mv ${_achivename} $pkgdir/opt/${_dstdirname}

	msg2 "remove win files"
	rm -f $pkgdir/opt/${_dstdirname}/*.{bat,exe,ini}

	msg2 "rename launch scripts (runner.sh -> bgbillingrunner.sh)"
	rename runner.sh bgbillingrunner.sh $pkgdir/opt/${_dstdirname}/runner.sh

	msg2 "chmod"
	chmod +x $pkgdir/opt/${_dstdirname}/*.sh

	msg2 "patch JAVA_HOME in launch script"
	sed -i "s|\${JAVA_HOME}\/bin\/java|java|" $pkgdir/opt/${_dstdirname}/bgbillingrunner.sh
	sed -i '5d' $pkgdir/opt/${_dstdirname}/bgbillingrunner.sh
	sed -i '5d' $pkgdir/opt/${_dstdirname}/bgbillingrunner.sh
	sed -i '5d' $pkgdir/opt/${_dstdirname}/bgbillingrunner.sh
	sed -i '5d' $pkgdir/opt/${_dstdirname}/bgbillingrunner.sh
	sed -i '5d' $pkgdir/opt/${_dstdirname}/bgbillingrunner.sh

	msg2 "patch log path in launch script"
	sed -i "s/runner\.log/\$\{HOME\}\/\.bgbilling\/runner\.log/" $pkgdir/opt/${_dstdirname}/bgbillingrunner.sh

	msg2 "patch var in files"
	_patch_var_file bgbillingrunner.desktop
	_patch_var_file bgbillingrunner.sh

	msg2 "copy file"
	mkdir -p $pkgdir/usr/share/{applications,pixmaps}
	install    -m644 $srcdir/bgbillingrunner.png $pkgdir/usr/share/pixmaps/
	install    -m644 $srcdir/bgbillingrunner.desktop $pkgdir/usr/share/applications/
	install -D -m755 $srcdir/bgbillingrunner.sh $pkgdir/etc/profile.d/bgbillingrunner.sh
}
