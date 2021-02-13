# Maintainer: Jonas Witschel <diabonas@archlinux.org>
pkgname=thedarkmod-bin
pkgver=2.09
pkgrel=1
pkgdesc='First person stealth game'
arch=('x86_64')
url='https://www.thedarkmod.com/main/'
license=('Boost' 'BSD' 'CCPL' 'GPL' 'GPL3' 'custom:curl')
depends=('glibc' 'libx11' 'libxxf86vm' 'sh')
makedepends=('imagemagick' 'systemd')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
install="$pkgname.install"

# Choose one of the mirrors from http://mirrors.thedarkmod.com/tdm_mirrors.txt
_mirror='https://darkmod.taaaki.za.net/release'

source=("$pkgname-$pkgver-tdm_shared_stuff.zip::$_mirror/tdm_shared_stuff.zip"
        'thedarkmod.sh'
        'thedarkmod.desktop')

# The list of game assets can be obtained by running the command
# curl -s "$_mirror/crc_info.txt" | awk -F ' |]' '/\[File .*pk4\]/ { print "         '\''" $2 "'\''" }'
_assets=('fms/newjob/newjob.pk4'
         'fms/stlucia/stlucia.pk4'
         'fms/training_mission/training_mission.pk4'
         'tdm_ai_animals01.pk4'
         'tdm_ai_base01.pk4'
         'tdm_ai_humanoid_beasts01.pk4'
         'tdm_ai_humanoid_beasts02.pk4'
         'tdm_ai_humanoid_builders01.pk4'
         'tdm_ai_humanoid_females01.pk4'
         'tdm_ai_humanoid_guards01.pk4'
         'tdm_ai_humanoid_heads01.pk4'
         'tdm_ai_humanoid_mages01.pk4'
         'tdm_ai_humanoid_nobles01.pk4'
         'tdm_ai_humanoid_pagans01.pk4'
         'tdm_ai_humanoid_townsfolk01.pk4'
         'tdm_ai_humanoid_undead01.pk4'
         'tdm_ai_monsters_spiders01.pk4'
         'tdm_ai_steambots01.pk4'
         'tdm_base01.pk4'
         'tdm_defs01.pk4'
         'tdm_env01.pk4'
         'tdm_fonts01.pk4'
         'tdm_gui01.pk4'
         'tdm_gui_credits01.pk4'
         'tdm_models01.pk4'
         'tdm_models02.pk4'
         'tdm_models_decls01.pk4'
         'tdm_player01.pk4'
         'tdm_prefabs01.pk4'
         'tdm_sound_ambient01.pk4'
         'tdm_sound_ambient02.pk4'
         'tdm_sound_ambient03.pk4'
         'tdm_sound_ambient_decls01.pk4'
         'tdm_sound_sfx01.pk4'
         'tdm_sound_sfx02.pk4'
         'tdm_sound_vocals01.pk4'
         'tdm_sound_vocals02.pk4'
         'tdm_sound_vocals03.pk4'
         'tdm_sound_vocals04.pk4'
         'tdm_sound_vocals05.pk4'
         'tdm_sound_vocals06.pk4'
         'tdm_sound_vocals07.pk4'
         'tdm_sound_vocals_decls01.pk4'
         'tdm_standalone.pk4'
         'tdm_textures_base01.pk4'
         'tdm_textures_carpet01.pk4'
         'tdm_textures_decals01.pk4'
         'tdm_textures_door01.pk4'
         'tdm_textures_fabric01.pk4'
         'tdm_textures_glass01.pk4'
         'tdm_textures_metal01.pk4'
         'tdm_textures_nature01.pk4'
         'tdm_textures_other01.pk4'
         'tdm_textures_paint_paper01.pk4'
         'tdm_textures_plaster01.pk4'
         'tdm_textures_roof01.pk4'
         'tdm_textures_sfx01.pk4'
         'tdm_textures_stone_brick01.pk4'
         'tdm_textures_stone_cobblestones01.pk4'
         'tdm_textures_stone_flat01.pk4'
         'tdm_textures_stone_natural01.pk4'
         'tdm_textures_stone_sculpted01.pk4'
         'tdm_textures_window01.pk4'
         'tdm_textures_wood01.pk4')

for _asset in "${_assets[@]}"
do
	source+=("$pkgname-$pkgver-${_asset##*/}::${_asset/#/$_mirror/}")
	noextract+=("$pkgname-$pkgver-${_asset##*/}")
done

sha512sums=('4471c8725396e2315e1c8489587d358b0646108bb0e3af5d0c087948581c9e244dd672c6c2c763014c691d6805d234f16ae439a456ddd73eb0a0ca96a5aba165'
            '6ae720990201a314f72b0ff5fb686a7088d456ada7e1090d770e23d709c314c275405b4c73256682ee11fd6c73283257e832febb6add3a50f1b50183df1df0e6'
            '48927cfb6bf83e427aec47f1cd549c6730d1cbeecec82b7555df51a2ba57599c7abe0120ab51bc9195146abad9450c5701b7047b32cc342f7545b4221d2f4f8e'
            '376042dd899eccc1d1d823bbe6f9e518d3f1bfdc2da44a32154ebb6ddf7af116b873f6046b86e7822a8b2c5937b1384a85eed4ef1ab7a0ff76b3a27495cef99f'
            'bad1714575d422250fa8d138b636a9091670446f537539849765543b8f53f2bb9e1420a5c669ad2a82c8526744eb673d8a0887351a99e73dff495416554abf9b'
            '260226abe7ca642275dd22ed1179a9bc9967ec03d457b26e0bbfa092fe4161c03aab7d76b7beeb3add4aafa62b5f9f05c5be2d94c1922667e9123df5ef12ac5a'
            'ecde0e51545eba242df7ce43e84930b74f5aa438cd1c99bfbbad60edd01f1d0f1b390ac542e3ffa9663a341af6564f365bc61912fd4b692cd1a4b22bb1d6f61f'
            '71654f01d97ef2b126b63b46107a3f2fd938b78cf307817c45223f45f126d8036f16e9ecc6b07545ab1c8da09c6765d727310786fdffc349145a1b63525be5c4'
            '6a2f8ef8d333838fd563d0faaf4a633dfe446f6b984321f9ddc338408c7e03d05db9298e8682cbb4961447380caa658f63b4a0cce19707398d8c3200329fbfb7'
            '01b5d768229090e987b4335a55666887181074fe208f105a711ac78458c5f8baae75a69bd88b5be22bfdb647e2cb5d9ecfaa622e7065af2bdedbadbeb4c08ada'
            '481f860a7e6158854194166ddf5f4df98c76be9007bbebdd5c4fe5ec62c56e983cff59923727d07da42cc2d60809a2c7179a64b8a5211e7951e782db0d665456'
            '327a2511f387caf4dbe3718906eeda37a3aef997090dc77757d609921a49a6745e9fcba2b8d43bd95c44a91f0d61d1380e8fd9ff6448e22feb0d784b57a2c0b4'
            'e85504a916cc80add3ef5007c8ed77c7b92aafd184baea9f43e3a5803c25e35c5e091016125991bd3de58def13873bfdaf231da5a7eadc6a5eade17688cef78e'
            '93677dd69ba5f03d86a9d309925922703024b7ae02e4982bcb72bfedaba9da1832577460b9fb359bc5972c5498af2a7967f30855943b2fd9339633c48384404b'
            '557f74263cfceea2ad6e29bae41e6ff3571b2020a916a8e4622c85c812dcf20c5e2b23355d63b30a5380072b49eee38e3a42cd6d33694a60ddb034ee6b04f3f2'
            '9aa7ad1fb84058ae67d919bf59324992b6e1bac3c7ec3d421d4ebe9aac085633c42e459e22af20e37e61c82d63bb59aa405bb028e88c0c491cc5ca882e816320'
            'bc84745703cb0562e927332c925c48ca1b0d27ac74105730ab3538693907d964079e8b690c80c1d0d05f1eb37ebf1c7e195d41ad0c74da610e65d6b0dc059ad1'
            '2ccd3f1db7592585bbb7e6ae817ab7ea959d12f77f27838aa13e55c8dca1128ab0502a14258f9fe1290ba7102d8aebf161f8f58b4662784f73f140fab0cd3085'
            'b8f5b29c1d655079b9cf9fdf666aea6f6c799404ae3a5bdbe73d2be0d5895dae81f6052c37da150e01349b91b2cf59124f7d7d1f080b48a387d1ec21780ddb8c'
            '9f6ea35babf0ed46a0a094b8f7886a4d648af2cbf31c63cc1b67b0485c515e175d5bc8bf1b4a34d0c9455d4a47a3d49f801159975dfc8a119617aa2d41d44bee'
            '91a6a4c9dfd788e07f1f27b2a0f95a8591802a479163e8cdc43e04fa77f48815f70a7beb773dae02414dac1c47b77210f5ca01256869215d58a8d78718579122'
            '75c67eabdf609e6e8c989accc0f8372458db4360832612008ed017a94dfb417a24ff36612ddb793a747eca3f012e498c169924028f952805f5da85cd4c620089'
            '54306496a6f17c535272655c0f58ba9fb8b9dab0ddcffaf0f4b1b90b10b6bd33c082bf83c2aeadd66a0837dcb372669734575a12f09d69714dea2a6cf2ee1347'
            '77048cf2715d61cab7b6b97cf4dd3c15245b39fbea544a35558fe598be3bfb2a7458e94fa4a8b06a05865a3aa6548128af3f2454aa5ef34deed55ae592ae5ecc'
            '59450bd97e1ed4d20b607f83d4f7b1d475c3d6c0e733987c557e42ffd7425b93b36eac2b0f0733ffbd1faf9d42d394f96501801a133fa9d2a0bc03a41cf2fe2f'
            '2fc06cc536064a58fbf66b57af97c9582bbbd573f6a5ed4802e05ae99969d224bff497571e0a45b109e1320e2c3042b775d776c125ea92fa778adc6166567879'
            '0659ffae19c8c0597bb4afc92baff35d90441fa0b391ca4fc9bb3656b96f8fa589a353c93bacd752e65ace1e30856d64ade9b36270572e927fd48ccb08e2bfcf'
            'a644dd810ebbb1dc37dd041069f079bd2c257d347b604fb4f50587ddb6335c7d83d07a09283524cde0fbf6da62bbdb26a3aef7086c8c324b6286c91f16564e39'
            'f2a5d7367f911eae75130ea8d824478162af2d2c5d5e900e6b4a2b870b30370dfd564d086a5654bee067d533fae1217eeb942451f3cec0caf645ca7003a74ec4'
            '3dbd308472b32e446747e51b345c50890cefe355a37c11eae817177e494e044020f24d1aadf14819f0b334abfcd21ae1db3c5d2bb78a2a87dca9eede6349370a'
            '6b36016f105328d7aac6f318e3ef49c4269a96e1efc63ac0eb89e009e996a88914ed3ba002dcaed24c67ab2bb1b6db6ee9f32d712d69801d3429ec035cd970c4'
            '0742ed7cdcf26f544845ab5c616bf743cc0d70a4f7f179ed6e6ba25e329d77a23a8e05c046e08eca4959783290ddf50ea13805290bd277be36f04c967f421158'
            '2fbb0b914d63235d4be9f1dcb9cd4ce930eae091742a8bd4872045452305ed5814ad930a2b0422a3abdc2de9a800d8e419b22afd78325b225ed52d253ee6f527'
            '6caca4abb8b83094e710ae85b7e64385e7d90033e29f1951068fc9f6e3e4e032bcebdede0a966d175202803e7a1c60cd896e2bdda47b868b5822c2b4098318d4'
            'fb54759ea3db6f98124beecdda3dc1030420cccfaa6a2c5ff58b599bd2ed4a3d81f39e9ad70d08cb3e151cde2d2c84f9cd60048d4551433fc7ca3ce3a5243099'
            'c71cb1c696a2d7eb939dd071aa053c7bbd3754497b915da04622e4ee4669f73651ad52281c3c6d9f60abb7f186d7d0a9541c98ce3b2ad5e68b4ffedc6805c9c9'
            '6790b36f51954b128c05eceb756b197757e3f0d08a6bd105731c25b265473ad321b99afd57f5d903bd78fbcff59b67e32397a7881f7acf51557dd95bd6eb34e8'
            'b7b7ef637f8339f1557f05c1bfd6fce9dc2bdd6ab538b19b578c582644bd79023a170e45addaa7979718150d57e8b21a275ac13bf51c43632a9d7a25712cf83b'
            'c4c3e98eb9bddc9681777c338ddc550866f09cd744b42cdece631a20e9c01911c6452ef879733e99974345138d0e601cdc79632146ae896b829b0d5910d824be'
            '2b42c6dadbc273032c4d149c909f9e8e72c8066e803e02ac529a3331f50c9213b9337c3a0edcd390b2fef132e7b14424e47adfcbc9ead441c153de3360ae7760'
            '53e14b6cd940a55980608d2cbb95dfbe60fdcbd2d4abc055624d000b769fce0433e2731f0fba0b15119a114ec364afea01b13291aaa8a87544edce697503026a'
            'dc23bca477aaf73fd520752fbbdd34fd2afadd0bb5042666bb08af9f21ff3e192a563050ea694ccacd72ecdb71b503e79fcbd3d832e69e7598fb3b5e79ffbab6'
            'e7611de9ab30b9e79ef5476e5f10c86809c8459e62cc9afb3cbd414dd85717f21ba88f7f54f45501b43d9a9f47dfe17de62769739bb5d21c4f1db363a63b900a'
            '40dc08e35e6cd35139292cef6dc87ceaf369793033b4e967ff734f6737867c5bf5300fd3f247bfc1fc6d16cd679e9edb167c9400bdfb6c4697b3893ced854abe'
            '0debd50a066ed7f061ac5f9463b7973bcee96017e7b60f2068db5a1f559c6d9648d5c89fa47560e69eacf187c83823e5099280c4e1dc64389824a2eadf981f5f'
            '86a235eebc49fba869e77d44645026712323d387aabfce231bfb7bcf261025ed3da39a37023988430504937f1a1ad03286eb1ff7ca48d4c020d878c81086aaa2'
            '25748d63f1f8880edb4517389f801baddea3534ec113ec696c17694643ccba802cdcea3a655a3898fdb056c85df559de30d574b21d20f459e9b8f5497afc3f73'
            'c579b03a4e2d35db63220a5fb1c77135e85b469d28e7734d733524c5eaf31a3406a944c868474337f0b6b90a2e035a4a59bfce4a72eaea139bf96490b8a85172'
            '43944a52079eef3d6fe8dcfacbd12f5f8cd7bad26eccb59b9baadedf052716f3ef79d150c378d4c74b1f41b014967fd56c009364bccd450a91e32ff9c3cc7581'
            '3741f780dae4242cd6af5ab09af749c8e8484626ebf8b3b92bc8d7b71afbca0f95fc57e513b098111ee51b79ff978a30a257310a5df971e0b6c2881f54e0e32d'
            '34a37fc66ed4e08e17d54e20ef7e4fae9dd67b4dfb1b0c1d4e4c56dd613f52ea36ec66527dacdb6e26a803385eb1500038123a7f67c44f120256b738747078fa'
            'a05e85f801c02021876c2161404c9e2b00d8517f104594f917438cd2e12e90d1e0571dc5e985ff48d88c762bd7dae1b6b5343681fb748129871e096b2d8c138d'
            '1ba265ddac6081d021bd28c74062db7326c222bc1985b6e662594d793ff945dd0e90b3953e9b384e3f73f8b4309094a4ec02ebf420e7f20b37a6b1e83408827f'
            '0407a19e662a144b1b11f05f107118fedc36b4f28dbebc053dd54446e82e3a61e686a6b318680c0ef248f8ef37bcc55ed9d8a860c61266753d3aeeb8a5fe890f'
            'deb38ce4f331c63dc0d051f7d5213cecfec4fde550b340676546775b15e43fa0756d2a0a2003e56408700fb5b1d8303fa69e6755f9408b92b0e335fa1f84eb8c'
            '8c6320bbe7f3b1bd60235e0299fb85ac6db6d73e85ac180bf724ea39d3846a37701f6b180ba789eb28ba2c1fcee274da07ca414530b9480da50b5903ca8af373'
            'ed69caa3a00fb9a2491914b6f0c12e3275b8ad9aeb7de15ee846757c91c48f6eb9faf230e44e44bfec8668d731e7569fdf07c01cc7c994a5cba344dbd603e4fd'
            'd506bbd1d65728d6c2fb5d553c8e66f2d107257919d16d9cd10671a2972d726e84e9bed3c81b571294cd284d5755f578e7400b319e8e5d9ddc46cd74180171a0'
            '7df8efeb8e99f897e574fa3f1fda26c73a287ca56cba7242736c011767a54c86191a864ef0990e607036f71893b5171463766bbeb45d9137a496591a4bf57731'
            '3962ced55c69544be6e3d2a8a8e0035c47d8e7c4a525cfee26deeffd65ea132c0f0b478db8a14527f187223d70ac690b0082838c5dc1f4ca015883e1c6d0a055'
            '0ff02fa2620fa60b9d884905e3cd3b7d82f32f2a0662e8ea553782f34165ed68e348d6d50ed6bd385c874b5dbf066cfd0f613fcd966b14ed4816cc7e09201b1b'
            'a63a2a7a2aa9ac37f64e2c80ec4a93aa292c9d5f1d9a58dc98a93c8b0a6a59dd288cf63707d8c7cfdefc167ae1352e1dd21450edcabcec78204e9205d7602991'
            '54e6a5d89be81078f97c2c5ae03a89be7f72e13816b6f258c45e424defd77d33e6af399dd7a7a81215eef7a7dac53508cdf9d9d977d5c25d1f0b7d3396b12e0a'
            '8f44eaa4c69c58eecd84cacce4b4650967d12ca8e9074ad7d3114f5424e6b2d6586ce816078caeb5ae8d1c6d98b8536eaa92cb36d0926b3c7613700f9d4b446c'
            'e6d75cfa27dd1b8e15da5da86e35253410178e25ecdcd53c20f0e054148f7addb2e443a9f1a1409b26598be2f0211bd57b613840b937b546807e780f9a3742eb'
            'a3d0099695a02a35b6d304fca6387443aad2fb6ec9f64797df72978dff17e0427529d33d5cbe0dbdb051d6a642d19d38ac1f9c44d5acbcf6eefdcd9afefc5800'
            '5f91dbdb4c1e7ecc115b8ca1cdbc92f2cf53610ddedf9e8d612e2d7691283327936e3d28dd56924a661602e1eba0e3d8a8beebd5a82c5b0faa4a55a53fbc867d')

prepare() {
	convert TDM_icon.ico thedarkmod.png
}

package() {
	install -Dm755 thedarkmod.x64 -t "$pkgdir/opt/thedarkmod"
	for _asset in "${_assets[@]}"
	do
		install -Dm644 "$pkgname-$pkgver-${_asset##*/}" "$pkgdir/opt/thedarkmod/$_asset"
	done
	install -Dm644 LICENSE.txt -t "$pkgdir/usr/share/licenses/$pkgname"

	install -Dm755 thedarkmod.sh "$pkgdir/usr/bin/thedarkmod"
	install -Dm644 thedarkmod.png -t "$pkgdir/usr/share/pixmaps"
	install -Dm644 thedarkmod.desktop -t "$pkgdir/usr/share/applications"

	# Users must be able to create files in the game directory to save games,
	# install new missions etc, cf. https://bugs.thedarkmod.com/view.php?id=3567
	chown root:games "$pkgdir"/opt/thedarkmod/{,fms,fms/newjob,fms/stlucia,fms/training_mission}
	chmod g+w "$pkgdir"/opt/thedarkmod/{,fms,fms/newjob,fms/stlucia,fms/training_mission}
}
