# Maintainer: GiacoLenzo2109 <GiacoLenzo2109@gmail.com>
# Contributor: Librewish <librewish@gail.com>
# Contributor: Bernhard Landauer <oberon@manjaro.org>
# Contributor: Timothy Redaelli <timothy.redaelli@gmail.com>
# Contributor: darkcoder <mario_vazq@hotmail.com>

pkgname=os-prober-croco
_pkgname=os-prober
pkgver=1.77
pkgrel=2
pkgdesc="Utility to detect other OSes on a set of drives"
url="http://joey.kitenet.net/code/os-prober/"
arch=('i686' 'x86_64')
license=('GPL3')
depends=('sh')
provides=('os-prober')
conflicts=('os-prober')
source=(http://http.debian.net/debian/pool/main/o/${_pkgname}/${_pkgname}_${pkgver}.tar.xz
	os-prober-frugalware.diff
	os-prober-mdraidfix.patch
	os-prober-btrfsfix.patch
	os-prober-bootpart-name-fix.patch
	os-prober-mounted-partitions-fix.patch
	os-prober-factor-out-logger.patch
	os-prober-factored-logger-efi-fix.patch
	os-prober-umount-fix.patch
	os-prober-grub2-parsefix.patch
	os-prober-haiku-efi.patch
	os-prober-no-dummy-mach-kernel.patch
        os-prober-grub2-multiple-images.patch
	os-prober-grepfix.patch
	os-prober-gentoo-fix.patch
	fix-blkid-path.patch)
md5sums=('cfe55c2414868fb1478a4565887b9de3'
         '2ae284a2fc6cafb6ec4af0f44d3c3e48'
         'fa2c878cbb8af6b6dc57b6cd966520ec'
         'd3ef3f5f108810cc9241084463033470'
         '672f301022bdb4a2962e9c7f8af05f21'
         '3c15707f9abbf2867d44886a77dbf74a'
         '7e4c8f98ff7763472bc46adb4f9119c2'
         '1a09f769d1e966c773b8885a9b0be44e'
         '69e5e23a35a2756fcb9d649d0ae2eea5'
         'b81bdf05173269ccce91c9a81ce4bfe8'
         'd1ba57816ae6f610249857065e8b0f03'
         'a77ee9b3eaef6a2d54318415d6ef04db'
         '2ac73c1c9f3ff32c4c5670f5fbda9f0d'
         'ed3242f992b525a4af0a9df9af51e334'
         'ec05aaa35c83ab669291e8895c252cc8'
         '20dc42ef9b69f79b920380cd95191ed3')
sha256sums=('8d8ea4afbe1aeef3c8b73f74a0fb37b06185e21a6abc78f80fc2160009cf705f'
            '9a6c22c91ea5955d665bc20d85d899f6721875a6216862d59a1b7f3f4241fd02'
            '092b0caef6fff45560531c0735e9449cb05a677e2296d72b5a0b4fb568fa4476'
            'c9738e0e6aa0ca79d84726288b9bbd0ca3a5220cd08136280492d8f9454c932c'
            'c3d094f02b8a00026af10fdfe2ea9286cd1af6a1e25afcc82f3b234bdb64b86f'
            '7a9c4a0f5bba4053b1bbf1640c854aee83f526fd086c94bc7691e1d3cb28afb7'
            'b5c41ac1bc1a4544dd2d9efdcf190d6e5c2f0822b6d0e5fc8f7e6e5222da1d8d'
            '08bf632e4716a3a63bd8f20e729c540754b676b23f4f82ff9156c448910c6f94'
            '81a5ce0c5e784480dff7520bdfada8f80dfe96b101e14e41bca2d0992e863e68'
            'afc201d4d71525b73ffa365f7c667148e007836567be4c8ec25ea661d43b43f8'
            'cc7182f0924a298b607abfcf61da6934654d6d52256e419df71effcef153fc66'
            '1369453105d858a7b3de833bab4bcc615ac6b72fac8a104519c2fbfcce33d837'
            '07b919c7559ce6c5a8d8907d752366fc97ccf40b7ad54cbb2de904a9dd373efd'
            'a9331117892dd9876b346d941969f70da96d54ce122d7a5ff40d9efe36aded42'
            '02741e0edbc46327501be5d74977ff2bffa5ddaffe6a55a689e38ce4b8372444'
            '87bbb0f69ebb47f5136291d6851967fba791db4f27d8883b35fc5be1653ff7a6')

prepare() {
  cd "$_pkgname-$pkgver"

  patch -p1 -i "$srcdir"/os-prober-frugalware.diff
  patch -p1 -i "$srcdir"/os-prober-mdraidfix.patch
  patch -p1 -i "$srcdir"/os-prober-btrfsfix.patch
  patch -p1 -i "$srcdir"/os-prober-bootpart-name-fix.patch
  patch -p1 -i "$srcdir"/os-prober-mounted-partitions-fix.patch
  patch -p1 -i "$srcdir"/os-prober-factor-out-logger.patch
  patch -p1 -i "$srcdir"/os-prober-factored-logger-efi-fix.patch
  patch -p1 -i "$srcdir"/os-prober-umount-fix.patch
  patch -p1 -i "$srcdir"/os-prober-grub2-parsefix.patch
  patch -p1 -i "$srcdir"/os-prober-grub2-multiple-images.patch
  patch -p1 -i "$srcdir"/os-prober-grepfix.patch
  patch -p1 -i "$srcdir"/os-prober-gentoo-fix.patch
  patch -p1 -i "$srcdir"/fix-blkid-path.patch
  patch -p1 -i "$srcdir"/os-prober-haiku-efi.patch
  patch -p1 -i "$srcdir"/os-prober-no-dummy-mach-kernel.patch

  # adjust lib dir to allow detection of 64-bit distros
  sed -i -e "s:/lib/ld\*\.so\*:/lib*/ld*.so*:g" os-probes/mounted/common/90linux-distro

  rm -f Makefile
}

build() {
  cd "$_pkgname-$pkgver"

  make newns
}

package() {
  cd "$_pkgname-$pkgver"

  install -Dm755 linux-boot-prober "$pkgdir"/usr/bin/linux-boot-prober
  install -Dm755 os-prober "$pkgdir"/usr/bin/os-prober
  install -Dm755 newns "$pkgdir"/usr/lib/os-prober/newns
  install -Dm755 common.sh $pkgdir/usr/share/os-prober/common.sh  

  for dir in os-probes os-probes/mounted os-probes/init linux-boot-probes linux-boot-probes/mounted; do
    install -dm755 "$pkgdir/usr/lib/$dir"
    install -m755 -t "$pkgdir/usr/lib/$dir" "$dir"/common/*
    [[ -d "$dir"/x86 ]] && cp -r "$dir"/x86/* "$pkgdir/usr/lib/$dir"
  done

  install -Dm755 os-probes/mounted/powerpc/20macosx "$pkgdir"/usr/lib/os-probes/mounted/20macosx

  install -dm755 "$pkgdir"/var/lib/os-prober
}
