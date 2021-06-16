// imported modules
import { useState } from 'react';
import ModalComment from 'components/Modal/ModalComment';
import { ChatIcon } from '@heroicons/react/outline';
import { useMutation } from '@apollo/client';
import CREATE_COMMENT_POST from 'graphql/comments/commentsMutation/createCommentPost';

// create component
const Comment = ({ post, userAuth }) => {

   // state component
   const [isOpen, setIsOpen] = useState(false);
   const [showModal, setShowModal] = useState('comment');
   const [values, setValues] = useState({ content: '' });
   const [error, setError] = useState(null);

   // graphql mutation
   const [createCommentPost, { loading }] = useMutation(CREATE_COMMENT_POST, {
      update: () => {
         setValues({ content: '' });
         setShowModal('message');
      },
      onError: (error) => {
         console.log(error);
         setError(error.message)
         setShowModal('message')
      }
   })

   // on change content
   const onChangeContent = event => {
      setValues({ ...values, content: event.target.value });
   }

   // on submit comment
   const onSubmitComment = async event => {
      event.preventDefault();
      // on error
      if (error) {
         setShowModal('message')
      }
      else {
         // run mutation
         await createCommentPost({
            variables: {
               postId: post.id,
               userId: userAuth.id,
               content: values.content
            }
         })
      }
   }

   // render
   return (
      <div>
         <div className="button flex items-center sm:hover:text-green-500">
            <ChatIcon
               onClick={() => setIsOpen(true)}
               className="button h-9 p-2 rounded-full hover-active-green"
            />
            <p>{post.comments.length}</p>
         </div>

         {/* modal for new comment */}
         <ModalComment
            post={post}
            userAuth={userAuth}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            showModal={showModal}
            setShowModal={setShowModal}
            values={values}
            setValues={setValues}
            error={error}
            loading={loading}
            onChangeContent={onChangeContent}
            onSubmitComment={onSubmitComment}
         />
      </div>
   )
}

// export component
export default Comment;
